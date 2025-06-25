import React, { useState, useEffect } from "react";

const DB_NAME = "MyNotesDB";
const DB_VERSION = 1;
const STORE_NAME = "notes";

const IndexedDBDemo = () => {
  const [db, setDb] = useState(null);
  const [note, setNote] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  // Initialize DB on mount
  useEffect(() => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      setDb(db);
      fetchNotes(db);
    };

    request.onerror = () => {
      console.error("Error opening IndexedDB");
    };
  }, []);

  // Add a note
  const addNote = () => {
    if (!note.trim()) return;
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.add({ content: note });
    tx.oncomplete = () => {
      setNote("");
      fetchNotes(db);
    };
  };

  // Read all notes
  const fetchNotes = (dbInstance) => {
    const tx = dbInstance.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => {
      setAllNotes(request.result);
    };
  };

  // Delete a note
  const deleteNote = (id) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.delete(id);
    tx.oncomplete = () => fetchNotes(db);
  };

  // Clear all notes
  const clearNotes = () => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    tx.oncomplete = () => setAllNotes([]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow space-y-4">
      <h2 className="text-xl font-bold">IndexedDB Notes</h2>

      <textarea
        className="w-full border p-2 rounded"
        rows={3}
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="flex gap-2">
        <button onClick={addNote} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add Note
        </button>
        <button onClick={clearNotes} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Clear All
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Stored Notes:</h3>
        {allNotes.length === 0 ? (
          <p className="text-gray-500">No notes available</p>
        ) : (
          allNotes.map((n) => (
            <div key={n.id} className="bg-gray-100 p-2 rounded flex justify-between items-center">
              <span>{n.content}</span>
              <button onClick={() => deleteNote(n.id)} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IndexedDBDemo;
