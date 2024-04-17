import { useContext } from "react";
import NavBar from "./NavBar";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  return (
    <div className="container">
      <NavBar />
    </div>
  );
};

export default Header;
