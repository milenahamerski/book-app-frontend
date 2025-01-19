import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Atualização no import
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"; // Importando o Home
import AddBookForm from "./components/AddBookForm";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar profileImage="path/to/profileImage.jpg" />
        <div className="ml-64 p-4 w-full">
          <Routes> {/* Substituindo Switch por Routes */}
            <Route path="/" element={<Home />} /> {/* Atualizando para usar 'element' */}
            <Route path="/add-book" element={<AddBookForm />} /> {/* Atualizando para usar 'element' */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
