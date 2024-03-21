import React , { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import cheerio, { Cheerio } from 'cheerio';



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
  const openArchive=()=>{
   window.open('https://google.com','_blank');
  }
    useEffect(() => {
        document.title = "Cybersecurity Training | Technologies and Stories"; // Set the new page title
      }, []); // Empty dependency array to run the effect only once when the component mounts

      
      useEffect(() => {
        const fetchWebData = async () => {
          try {
            const raw_web = await axios.get('https://feelfreetoscrapfromus.com');
            const $ = cheerio.load(raw_web.data);
            const links = [];
            $('.focus-articles_link').each((index, element) => {
              const link = $(element).attr('href');
              links.push(link);
            });
      
            const divStyle = $('.focus-articles__image').attr('style');
            const urls_Images = [];
            const urlRegex = /url\(['"]?(.*?)['"]?\)/g; // Use 'g' flag for global search
            let match;
            while ((match = urlRegex.exec(divStyle)) !== null) {
              urls_Images.push(match[1]);
            }
            console.log(urls_Images); // Log extracted image URLs
          } catch (error) {
            console.error('Error fetching web data:', error);
          }
        };
      
        fetchWebData();
      }, []); // Empty dependency array to run effect only once
      




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
