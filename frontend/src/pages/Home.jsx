import React from "react";
import { NavLink } from "react-router-dom";
import { FileText, PlusCircle, LayoutDashboard } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen text-gray-800 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Smart Notes for Smart People 🧠
        </h1>

        <p className="text-gray-600 max-w-xl mb-8 text-lg">
          Capture your ideas, organize your thoughts, and boost productivity — all in one place.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <NavLink
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            🚀 Get Started
          </NavLink>

          <NavLink
            to="/dashboard/view"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            📂 View Notes
          </NavLink>
        </div>

      </section>

      {/* Features Section */}
      <section className="px-8 py-16 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose E-NOTES?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <FileText size={34} className="mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Create Notes</h3>
            <p className="text-gray-500 text-sm">
              Quickly write and store your thoughts securely.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <LayoutDashboard size={34} className="mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">Smart Dashboard</h3>
            <p className="text-gray-500 text-sm">
              Manage all your notes with a clean interface.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <PlusCircle size={34} className="mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Quick Add</h3>
            <p className="text-gray-500 text-sm">
              Add notes instantly without distractions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-gray-600 mb-6">
            Start creating and managing your notes efficiently today.
          </p>

          <NavLink
            to="/dashboard/addNote"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition shadow-md"
          >
            ✍️ Create Note
          </NavLink>
        </div>
      </section>

    </div>
  );
};

export default Home;