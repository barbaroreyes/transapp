import React,{useState,useEffect} from 'react';
import {Link} from  'react-router-dom'
const Nav = () => {

  const [toggleView , setToggleView] = useState(false)
  return (
    <nav >
      Navigation
     <ul>
       <li className="items">Home</li>
       <li className="items">About</li>
       <li className="items">Portafolio</li>
       <li className="items">Contact</li>

     </ul>
     <button className="btn">BTN</button>
    {/* <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/portafolio'>Portafolio</Link>
    <Link to='/contact'>Contact</Link> */}
        </nav>
  );
}

export default Nav;
