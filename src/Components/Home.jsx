import React, { useEffect, useState } from "react";
import Room from "./Room";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((res) => setData(res.packages))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.map((d) => (
        <Room key={d.id} data={d}></Room>
      ))}
    </div>
  );
};

export default Home;
