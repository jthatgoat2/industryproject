import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../../pages/QuizPage/QuizPage";
import App from "../App";

function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
