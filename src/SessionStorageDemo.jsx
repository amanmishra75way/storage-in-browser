import React, { useState, useEffect } from "react";

const SessionStorageDemo = () => {
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const storedDraft = sessionStorage.getItem("draft") || "";
    setDraft(storedDraft);
  }, []);

  const saveDraft = () => {
    sessionStorage.setItem("draft", draft);
    alert("Draft saved to sessionStorage");
  };

  const removeDraft = () => {
    sessionStorage.removeItem("draft");
    setDraft("");
    alert("Draft removed from sessionStorage");
  };

  const clearSession = () => {
    sessionStorage.clear();
    setDraft("");
    alert("SessionStorage cleared");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">SessionStorage Example</h2>

      <textarea
        className="w-full border p-2 rounded"
        rows={4}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Write your draft here..."
      />

      <div className="flex gap-2">
        <button onClick={saveDraft} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Save Draft
        </button>

        <button onClick={removeDraft} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Remove Draft
        </button>

        <button onClick={clearSession} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Clear All
        </button>
      </div>

      <p className="text-gray-600">
        Current stored draft: <span className="font-medium text-black">{draft || "None"}</span>
      </p>
    </div>
  );
};

export default SessionStorageDemo;
