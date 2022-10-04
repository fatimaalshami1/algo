import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topleft">
        <p className='toplogo'>
          AlgoWiz 
          {/* logo */}
        </p>
        </div>

    

      <div className="topright">
        <ul className="topList">
        <li className="topListItems">Home</li>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          <li className="topListItems">Search</li>
          <li className="topListItems">About Us</li>
          <li className="topListItems">Help</li>
          
        </ul>
       
        
      

      </div>

    </div>
  )
}
