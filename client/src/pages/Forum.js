import React from "react";
import Category from "../components/Category";
import "./styles/forum.css"

const CATEGORY_TOPICS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Web APIs",
  "Third-Party APIs",
  "Server-Side APIs",
  "Node JS",
  "Object-Oriented Programming (OOP)",
  "Express",
  "SQL",
  "Object-Relational Mapping (ORM)",
  "Model-View-Controller (MVC)",
  "Computer Science for JavaScript",
  "NoSQL",
  "PWA - Web Performance",
  "React",
  "MERN",
  "State Management - MERN"
]
export default function Forum() {
    return (
      <div className="topics">
            <ul className="collection with-header">
                <li className="collection-header"><h3>Select a Topic Below</h3></li>
                     <Category name="Career" />
                     <br />
                <div className="codetopic">
                        {CATEGORY_TOPICS.map(topic => <Category name={topic} />)}
                   
                </div>
            </ul>
        </div>
    );
  }

  