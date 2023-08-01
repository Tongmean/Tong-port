import React from 'react'
import { useState } from 'react';
import './Sidebar.css'
import Home from '../home/Home'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import SidebarList from './SidebarList';
const Sidebar = ({theme, changeTheme}) => {
    const [expandSideBar, setExpandSideBar] = useState(false);
    const handleExpandClick = () => {
        setExpandSideBar(!expandSideBar);
    };
  return (
    <div className='container-fluid sidebar-section'>
        <div className= {expandSideBar ? 'sidebar-expand sidebar':'sidebar'}>
            <div className='icon-for-sidebar-expand-and-collapse'>
                <p onClick={handleExpandClick}>
                    {expandSideBar ? (<BsChevronLeft size={30}/>):(<BsChevronRight size={30}/>)}
                </p>
                
            </div>
            <SidebarList expandSideBar={expandSideBar}/>
        </div>

        <div className='container'>
            <Home theme={theme} changeTheme={changeTheme} />
        </div>

    </div>
  )
}

export default Sidebar;