import React from "react";

const CookieStorage = () => {
  document.cookie = "username=Aman; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=http://localhost:5173/";
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center bg-slate-400 rounded-lg px-2 py-10 ">{document.cookie}</div>
    </div>
  );
};

export default CookieStorage;
