import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
  <>
   <header>
   <img src="https://i.postimg.cc/V6hVNvGF/logo.png" alt="logo" className="nav_logo"></img>
      <div className="container">  
      <nav>
        <ul className="nav_options">
            <li className="items"><a  href="#">Home</a></li>
            <li className="Court"><a  href="#">Courts</a>
                     <ul className="subnav">
                          <li><a href="#">Option 1</a></li>
                          <li><a href="#">Option 2</a></li>
                          <li><a href="#">Option 3</a></li>
                     </ul>
            </li>
            <li className="items"><a href="#">Reports</a></li>
           
        </ul>
      </nav>
      </div>
      <a className= "logout" href="#">Logout</a>
    </header>
    </>
  )
}

export default Navbar;
