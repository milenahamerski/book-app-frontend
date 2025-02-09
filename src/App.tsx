import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddBookForm from "./components/AddBookForm";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar profileImage="/penguin.jpeg" />
        <div className="ml-64 p-4 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBookForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
