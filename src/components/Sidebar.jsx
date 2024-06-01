import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  // Early Return Pattern
    if (!isMenuOpen) return null;

  return (
    <div className="shadow-sm col-span-1 pl-2">
     
        <ul className="pt-4 my-2">
          <li><Link to="/react_youtube/">Home</Link></li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
  

      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul className="my-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-4">Watch Later</h1>
      <ul className="my-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
