import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
