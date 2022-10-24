import React from 'react';

export default function Navbar () {
  const navClass = "flex items-center justify-between flex-wrap bg-green-200 p-6";

  return (
    <nav className={navClass} id='navbar'>
      <div id='logo'>
        Logo here.
      </div>
      <div id='links'>
        <p>Enter Time</p>
      </div>
      <div id='logout'>
        <p>Logout</p>
      </div>
    </nav>
  )
};