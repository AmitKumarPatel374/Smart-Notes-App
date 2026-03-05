import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { ArrowDown, CircleUserRound } from 'lucide-react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <h1>E-NOTES.</h1>
      </div>
      <div>
          <CircleUserRound /><ArrowDown />
      </div>
      {isOpen? <div>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/addNote">My Notes</NavLink>
        <NavLink to="/dashboard/view">New note</NavLink>
      </div>:
      <div></div>
      }
    </div>
  )
}

export default Navbar
