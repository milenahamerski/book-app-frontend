import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-sage text-white flex items-center p-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
