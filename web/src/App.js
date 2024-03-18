import React from 'react';
import HomePage from './HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import About from './About';
const App = () => {
    return(
        <Router>
        <div className='App'>
            <Navbar/>
        <div className='content'>
            <Routes>
                <Route path ="/" element ={<HomePage/>}>
                </Route>
                <Route path ="/about" element ={<About/>}>
                </Route>

            </Routes>
        </div>
        </div>
        </Router>

    );
};
export default App;