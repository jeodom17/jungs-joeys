import React, { useEffect } from "react";
import Category from "../components/Category";
import "./styles/forum.css";

import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "../utils/queries";

const CATEGORY_TOPICS = [
  "Unit 1 - HTML, Git, CSS",
  "Unit 2 - Advanced CSS",
  "Unit 3 - JavaScript",
  "Unit 4 - Web APIs",
  "Unit 5 - Third Party APIs",
  "Unit 6 - Server Side APIs",
  "Unit 7 - Project 1",
  "Unit 8 - Project 1 Continued",
  "Unit 9 - NodeJS",
  "Unit 10 - OOP",
  "Unit 11 - Express",
  "Unit 12 - SQL",
  "Unit 13 - ORM",
  "Unit 14 - MVC",
  "Unit 15 - Project 2",
  "Unit 16 - Project 2 Continued",
  "Unit 17 - CS",
  "Unit 18 - NoSQL",
  "Unit 19 - PWA",
  "Unit 20 - React",
  "Unit 21 - MERN",
  "Unit 22 - State",
  "Unit 23 - Project 3",
  "Unit 24 - Project 3 Continued",
];

const Forum = () => {
  const { loading, error, data } = useQuery(GET_TOPICS);
  const topicData = data?.getTopics || [];

  return (
    <div className="topics container">
      <ul className="collection with-header topics-border">
        <li className="collection-header">
          <h3 className="select-topic">SELECT A TOPIC</h3>
        </li>
        {loading ? (
          <div className="topic-loading">Loading...</div>
        ) : (
          <div className="codetopic">
            {topicData.map((topic) => (
              <Category name={topic.name} />
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Forum;
