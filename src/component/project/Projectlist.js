import React from 'react'
import './projectlist.css'
import { useState } from 'react'
import {FcExpand, FcCollapse} from 'react-icons/fc'
const Projectlist = ({name, desc, Projectlink, techuse}) => {
    const [Show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!Show);
    };

    return (
    <div className='project-list' onClick={handleShow} onMouseEnter ={()=>setShow(false)} onMouseLeave = {()=>setShow(true)}>
        <div className='title-and-collapse-option'>
        <h3>{name}</h3>
            <p>
                {Show ? (<FcExpand size={20}/>):(<FcCollapse size={20}/>)}
            </p>
        </div>

        {Show ? <p>{desc.substring(0,15)} ...load More</p> : <p>{desc}</p> }

        <div className='row'>
            {techuse && techuse.map((tech,index) => (
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                    <div className='tech-name'>
                        <p>
                            {tech.name}
                        </p>
                    </div>
                </div>
            ))}

        </div>
        {/* <div className='live-demo-button'>
            <a target="_" href={Projectlink}>Live Demo</a>
        </div> */}
    </div>
    
  )
}

export default Projectlist