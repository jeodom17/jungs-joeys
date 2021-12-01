import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Category(props) {
  return (
   
        <Link
          to={`/topic?name=${props.name}`}
          className="item collection-item"
        >
          {props.name}
        </Link>
  
  );
}
