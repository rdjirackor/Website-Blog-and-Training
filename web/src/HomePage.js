import React , { useEffect } from 'react';
import { ReactDOM } from 'react';

import './styles.css'; 
import About from './About';
import d from './assets/d.jpeg';
import d1 from './assets/d1.jpeg';
import d2 from './assets/d2.jpeg';
import d3 from './assets/d3.jpeg';
import d4 from './assets/d4.jpeg';
import d5 from './assets/d5.jpeg';
import d6 from './assets/d6.jpeg';
import d7 from './assets/d7.jpeg';


function HomePage() {
  const openArchive=()=>{
   window.open('https://google.com','_blank');
  }
    useEffect(() => {
        document.title = "Cybersecurity Training | Technologies and Stories"; // Set the new page title
      }, []); // Empty dependency array to run the effect only once when the component mounts


  return (
    <>


      
  <div className='body'>
        
      <div className='images'>
        <div className='top-row_images'>
       <a href='https:google.com'> <img src={d}/></a>
       <a href='https:google.com'> <img src={d1}/> </a>
       <a href='https:google.com'> <img src={d2}/> </a>
       <a href='https:google.com'><img src={d3}/> </a>
        </div>
        <div className='bottom-row_images'>
        <a href='https:google.com'><img src={d4}/> </a>
        <a href='https:google.com'><img src={d5}/> </a>
        <a href='https:google.com'><img src={d6}/> </a>
        <a href='https:google.com'><img src={d7}/> </a>
        </div>
      </div>

      < div className='more'>
        <button onClick={openArchive}>Story Archives</button>
      </div>

      </div>
    </>
  );
}

export default HomePage;
