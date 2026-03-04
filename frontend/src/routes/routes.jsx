import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Dashboard from '../pages/dashboard';
import AddNote from '../pages/addNote';
import ViewNotes from '../pages/viewNotes';

const RoutesConfig = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/dashboard'  element={<Dashboard />}/>
        <Route path='/dashboard/addNote'  element={<AddNote /> }/>
        <Route path='/dashboard/view'  element={<ViewNotes />}/>
      </Routes>
    </div>
  )
}

export default RoutesConfig
