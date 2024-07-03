import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const allUsers = useSelector((state) => state.app.users)


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#c2bfbf] z-20 flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4">
      <div className="flex justify-between w-full sm:w-auto items-center">
        <h2 className="text-[#695557] font-extrabold text-xl">CRUD APP</h2>
        <button
          className="sm:hidden text-[#695557] font-extrabold"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      <div
        className={`flex flex-col sm:flex-row items-center w-full sm:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} sm:block`}
      >
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <li><Link to="/" className="text-[#695557] font-extrabold text-lg hover:text-[#4fb53a]">Create Post</Link></li>
          <li><Link to="/read" className="text-[#695557] font-extrabold text-lg hover:text-[#4fb53a]">All Posts ({allUsers.length})</Link></li>
        </ul>
        <input
          className="w-full sm:w-[14rem] h-8 p-2 border border-[#353333] rounded mt-2 sm:mt-0"
          type="text"
          placeholder="Search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
