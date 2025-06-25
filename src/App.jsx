import React from "react";
import LocalStorage from "./LocalStorage";
import CookieStorage from "./CookieStorage";
import SessionStorageDemo from "./SessionStorageDemo";
import IndexedDBDemo from "./IndexDB";
const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {/* <LocalStorage /> */}
      {/* <CookieStorage /> */}
      {/* <SessionStorageDemo /> */}
      <IndexedDBDemo />
    </div>
  );
};

export default App;
