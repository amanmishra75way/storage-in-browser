import React from "react";
import LocalStorage from "./LocalStorage";
import CookieStorage from "./CookieStorage";
const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {/* <LocalStorage /> */}
      <CookieStorage />
    </div>
  );
};

export default App;
