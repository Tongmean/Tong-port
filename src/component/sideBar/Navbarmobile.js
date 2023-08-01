import React from 'react'
import './Navbarmobie.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FcHome, FcContacts, FcNightPortrait, FcSalesPerformance, FcTodoList, FcFactory } from "react-icons/fc";
const Navbarmobile = () => {
    const[Show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!Show);
    }
  return (
    <div className='navbar-mobile'>
        <div className='Navbar-mobie-header' onClick={handleShow}>
            <p>
                <GiHamburgerMenu size={26}/>
            </p>
        </div>
        {Show ? (null):(
            <div className='sidebar-35'>
                <ul>
                    <li className='nav-items-mobile'>
                        <Link to="home">
                            <FcHome size={30} />Home
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="about">
                            <FcContacts size={30} />About
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="experience">
                            <FcNightPortrait size={30} />Work Experience
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="tech-stack">
                            <FcSalesPerformance size={30} />Tech Stack
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="education">
                            <MdBiotech size={30} color="orange"/>Education
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="project">
                            <FcTodoList size={30} />Project
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="testimonial">
                            <FcFactory size={30} />Testimonial
                        </Link>
                    </li>
                    <li className='nav-items-mobile'>
                        <Link to="contact">
                            <FcContacts size={30} />Contact
                        </Link>  
                    </li>
    
                </ul>
            </div>
        )}


    </div>
  )
}

export default Navbarmobile