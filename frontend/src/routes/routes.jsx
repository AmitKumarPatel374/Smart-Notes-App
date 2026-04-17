import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Dashboard from '../pages/dashboard';
import AddNote from '../pages/addNote';
import ViewNotes from '../pages/viewNotes';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesConfig = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/dashboard'  element={<Dashboard />}/>
        <Route path='/dashboard/addNote'  element={<AddNote /> }/>
        <Route path='/dashboard/view'  element={<ViewNotes />}/>
        <Route path='/profile'  element={<Profile />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/register'  element={<Register />}/>
      </Routes>
    </div>
  )
}

export default RoutesConfig
