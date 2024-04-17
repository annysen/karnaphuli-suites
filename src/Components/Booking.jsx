import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Booking;
