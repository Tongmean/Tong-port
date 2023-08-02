import React from 'react'
import './contect.css'
// import Profile from '../Image/Profile.jpg'
// import { MdSend } from "react-icons/md"
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import lineqr from './lineqr.jpg'
import faceqr from './Faceqr.png'
const Contact = () => {
  return (
    <div className='container contact-section' id='contact'>
        <div className='row'>
            <Rotate>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <div className='line1'>
                   <img src={lineqr} alt=""/>
                </div>
            </div>
            </Rotate>
            <Zoom>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='face d-flex justify-content-center'>
                    <img src={faceqr} alt=""/>
                </div>
            </div>
            </Zoom>

        </div>
    </div>
  )
}

export default Contact
