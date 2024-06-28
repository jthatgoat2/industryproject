import React from "react";
import "./App.css";
import Quiz from "../pages/QuizPage/QuizPage";
import Header from "./components/header/Header";
import CourseModule from "./components/CourseModule/CourseModule";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseModule />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
