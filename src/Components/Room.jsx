import React from "react";
import { FaBed } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const Room = ({ data }) => {
  console.log(data);
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>

          <p>
            <FaBed></FaBed> : {data.bed_size}
          </p>
          <p>
            <HiOutlineUsers /> : {data.person}
          </p>

          <Link to="/booking">
            <button className="btn btn-primary">Book Room </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
