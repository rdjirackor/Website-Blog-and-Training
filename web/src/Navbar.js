import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
        <h1><Link to ={"/"}>RichardCyberSec</Link></h1>
        <Link to={"/about"} style={{marginLeft:'650px'}}>About</Link>
        <a>Contact</a>
        <a>Training</a>
        <a>LinkedIn</a>
        <a>Stories</a>
      </div>
    )
}

export default Navbar;
