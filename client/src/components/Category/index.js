import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import "./style.css"

export default function Category() {
    return (

        <div className="topics">
            <ul className="collection with-header">
                <li className="collection-header"><h3>Select a Topic Below</h3></li>
                     <Link to="/" className="item collection-item">Career   </Link>
                <div className="codetopic">
                    <div className="topic1">
                        <ul className="collection">
                    <Link to="/" className="item collection-item">HTML</Link>
                    <Link to="/" className="item collection-item">CSS</Link>
                    <Link to="/" className="item collection-item">JavaScript</Link>
                    <Link to="/" className="item collection-item">Web APIs</Link>
                    <Link to="/" className="item collection-item">Third-Party APIs</Link>
                    <Link to="/" className="item collection-item">Server-Side APIs</Link>
                    <Link to="/" className="item collection-item">Node JS</Link>
                    <Link to="/" className="item collection-item">Object-Oriented Programming (OOP)</Link>
                    <Link to="/" className="item collection-item">Express</Link>
                    </ul>
                </div>
                <div className="topic2">
                <ul className="collection">
                <Link to="/" className="item collection-item">SQL</Link>
                <Link to="/" className="item collection-item">Object-Relational Mapping (ORM)</Link>
                <Link to="/" className="item collection-item">Model-View-Controller (MVC)</Link>
                <Link to="/" className="item collection-item">Computer Science for JavaScript</Link>
                <Link to="/" className="item collection-item">NoSQL</Link>
                <Link to="/" className="item collection-item">PWA - Web Performance</Link>
                <Link to="/" className="item collection-item">React</Link>
                <Link to="/" className="item collection-item">MERN</Link>
                <Link to="/" className="item collection-item">State Management - MERN</Link>
                </ul>
                </div>
                

                </div>
            </ul>
        </div>
      

    );
}