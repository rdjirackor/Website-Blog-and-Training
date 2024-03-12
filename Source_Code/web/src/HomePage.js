import React , { useEffect } from 'react';

import './styles.css'; 
import d from './assets/d.jpeg';
import d1 from './assets/d1.jpeg';
import d2 from './assets/d2.jpeg';
import d3 from './assets/d3.jpeg';
import d4 from './assets/d4.jpeg';
import d5 from './assets/d5.jpeg';
import d6 from './assets/d6.jpeg';
import d7 from './assets/d7.jpeg';


function HomePage() {
    useEffect(() => {
        document.title = "Cybersecurity Training | Technologies and Stories"; // Set the new page title
      }, []); // Empty dependency array to run the effect only once when the component mounts
  return (
    <>


      <div className="navbar">
        <h1>RichardCyberSec</h1>
        <a style={{marginLeft:'650px'}}>About</a>
        <a>Contact</a>
        <a>Training</a>
        <a>LinkedIn</a>
        <a>Stories</a>
      </div>
      <div className='body'>
        <div className='title'>
      <h1>Cybersecurity Training, Technologies and Stories</h1>
      </div>
      <div className='images'>
        <div className='top-row_images'>
        <img src={d}/>
        <img src={d1}/>
        <img src={d2}/>
        <img src={d3}/>
        </div>
        <div className='bottom-row_images'>
        <img src={d4}/>
        <img src={d5}/>
        <img src={d6}/>
        <img src={d7}/>
        </div>
      </div>

      </div>
    </>
  );
}

export default HomePage;
