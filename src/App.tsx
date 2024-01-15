import React from "react";
import axiosInstance from "@/service";
import Board from "@/pages/board";

function App() {
  axiosInstance.defaults.baseURL = "https://btg-963kxulc.b4a.run/api/";
  //axiosInstance.defaults.baseURL = "http://localhost:5000/api/";
  axiosInstance.defaults.headers["Content-Type"] =
    "application/json;charset=utf-8";
  axiosInstance.defaults.headers["Access-Control-Allow-Origin"] = "*";

  axiosInstance.defaults.withCredentials = false;
  return <Board />;
}

export default App;
