import React from "react";
import LocalStorage from "./LocalStorage";
import CookieStorage from "./CookieStorage";
import SessionStorageDemo from "./SessionStorageDemo";
const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {/* <LocalStorage /> */}
      {/* <CookieStorage /> */}
      <SessionStorageDemo />
    </div>
  );
};

export default App;
