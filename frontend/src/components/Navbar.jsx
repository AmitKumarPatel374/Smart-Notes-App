import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowDown, CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white relative">

      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        E-NOTES
      </h1>

      {/* User Menu */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CircleUserRound size={28} />
        <ArrowDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-8 top-16 w-48 bg-white text-black rounded-lg shadow-lg flex flex-col overflow-hidden">

          <NavLink
            to="/profile"
            className="px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </NavLink>

          <NavLink
            to="/"
            className="px-4 py-2 hover:bg-gray-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className="px-4 py-2 hover:bg-gray-100"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/view"
            className="px-4 py-2 hover:bg-gray-100"
          >
            My Notes
          </NavLink>

          <NavLink
            to="/dashboard/addNote"
            className="px-4 py-2 hover:bg-gray-100"
          >
            New Note
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;