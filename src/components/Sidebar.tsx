import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

type SidebarProps = {
  profileImage: string;
};

const Sidebar: React.FC<SidebarProps> = ({ profileImage }) => {
  return (
    <div className="sidebar bg-green text-white w-64 fixed top-0 left-0 h-full flex flex-col items-center p-4 shadow-lg z-50">
      {/* Logo */}
      <div className="logo mb-8">
        <img 
          src={logo} 
          alt="Logo Organizer" 
          className="w-40 h-40 rounded-full" 
        />
      </div>

      {/* Perfil */}
      <div className="profile mb-8">
        <img 
          src={profileImage} 
          alt="Perfil" 
          className="rounded-full w-24 h-24" 
        />
      </div>

      {/* Menu */}
      <div className="menu w-full">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/add-book" 
              className="block w-full p-2 text-center hover:bg-sage rounded"
            >
              Adicionar Livro
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
