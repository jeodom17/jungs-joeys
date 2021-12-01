import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Question() {
  return (
    <div>
      <ul className="collection myposts">
        <li className="collection-item">
          <h3 className="posts-header">MY POSTS</h3>
          <Link to="/" className="secondary-content">
            <i className="material-icons"></i>
          </Link>
        </li>
      </ul>
      <ul className="collection myquestions">
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <p className="topics">TOPIC 1:</p>
          <p className="questions">Question 1:</p>
          <Link to="/forum" className="secondary-content">
            See Comments
          </Link>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <p className="topics">TOPIC 2:</p>
          <p className="questions">Question 2:</p>
          <Link to="/forum" className="secondary-content">
            See Comments
          </Link>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <p className="topics">TOPIC 3:</p>
          <p className="questions">Question 3:</p>
          <Link to="/forum" className="secondary-content">
            See Comments
          </Link>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <p className="topics">TOPIC 4:</p>
          <p className="questions">Question 4:</p>
          <Link to="/forum" className="secondary-content">
            See Comments
          </Link>
        </li>
      </ul>
    </div>
  );
}
