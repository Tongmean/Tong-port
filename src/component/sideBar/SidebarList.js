import React from 'react'
import './SidebarList.css'
import Profile from '../Image/660920036.jpg'
import { MdBiotech } from "react-icons/md";
import { Link } from 'react-scroll';
import { FcHome, FcContacts, FcNightPortrait, FcSalesPerformance, FcTodoList, FcFactory } from "react-icons/fc";

const SidebarList = ({ expandSideBar }) => {
    return (
        <div>
            {expandSideBar ? (
                <div className='navbar-items'>
                    <div className='sidebar-profile-pic'>
                        <img src={Profile} alt='Profile pic' />
                    </div>
                    <ul>
                        <li className='nav-items'>
                            <Link to="home">
                                <FcHome size={30} />Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="about">
                                <FcContacts size={30} />About US
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="experience">
                                <FcNightPortrait size={30} />Work Experience
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="tech-stack">
                                <FcSalesPerformance size={30} />Tech Stack
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="education">
                                <MdBiotech size={30} />Education
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="project">
                                <FcTodoList size={30} />Projects
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="testimonial">
                                <FcFactory size={30} />Testimonial
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="contact">
                                <FcContacts size={30} />Contact
                            </Link>  
                        </li>

                    </ul>
                </div>
            ) : (
                <div className='navbar-items-only-icons'>
                    <ul>
                        <li className='nav-items'>
                            <Link to="home">
                                <FcHome size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="about">
                                <FcContacts size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="experience">
                                <FcNightPortrait size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="tech-stack">
                                <FcSalesPerformance size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="education">
                                <MdBiotech size={30} color="orange"/>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="project">
                                <FcTodoList size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="testimonial">
                                <FcFactory size={30} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="contact">
                                <FcContacts size={30} />
                            </Link>  
                        </li>

                    </ul>
                </div>
            )}
        </div>
    )
}

export default SidebarList
