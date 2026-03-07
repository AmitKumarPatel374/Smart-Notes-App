import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h1 className="text-xl font-bold mb-3">E-NOTES</h1>
          <p className="text-gray-400 text-sm">
            Your personal notes manager. Save, organize and access your notes anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <div className="flex flex-col gap-2">
            <NavLink
              to="/profile"
              className="hover:text-gray-300 transition"
            >
              Profile
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-gray-300 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              className="hover:text-gray-300 transition"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/view"
              className="hover:text-gray-300 transition"
            >
              My Notes
            </NavLink>

            <NavLink
              to="/dashboard/addNote"
              className="hover:text-gray-300 transition"
            >
              New Note
            </NavLink>
          </div>
        </div>

        {/* Extra Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">Email: enotes@gmail.com</p>
          <p className="text-gray-400 text-sm">Made with ❤️ by Amit</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  )
}

export default Footer
