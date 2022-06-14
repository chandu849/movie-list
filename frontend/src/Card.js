import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Card = () => {
  const [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    axios.get("http://localhost:5000/getmovies").then((resp) => {
      setList(resp.data);
    });
  }, []);
  return (
    <div>
      {list.map((res) => (
        <div className="cards">
          <div className="image">
            <img src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg" />
          </div>
          <div className="name">Name : {res.name}</div>
          <div className="rating">Rating : {res.rating}</div>
          <div className="date">Date : {res.date}</div>
        </div>
      ))}
    </div>
  );
};