import React from "react";
import "./CourseModule.scss";
import { Link } from "react-router-dom";
import CourseButtom from "../CourseBottum/CourseButtom";
import Header from "../header/Header";
function CourseModule() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="slider-wrapper">
          <button
            id="prev-slide"
            className="slide-button material-symbols-rounded"
          ></button>

          <ul className="image-list" />
          <li className="image-item__cm-wrapper">
            <Link to="/quiz">
              <img
                className="image-item__cm"
                src="src/assets/Group 52 copy.svg"
                alt="img-1"
              />
            </Link>
          </li>
          <li className="image-item__cm-wrapper">
            <img
              className="image-item__cm"
              src="src/assets/Group 53.svg"
              alt="img-2"
            />
          </li>
          <li className="image-item__cm-wrapper">
            <img
              className="image-item__cm"
              src="images/img-3.jpg"
              alt="img-3"
            />
          </li>

          <button
            id="next-slide"
            className="slide-button material-symbols-rounded"
          ></button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
        <CourseButtom />
      </div>
    </>
  );
}

export default CourseModule;
