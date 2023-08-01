import React from 'react'
import './about.css'
import Profile from './660920036.jpg'
import Rotate from 'react-reveal/Rotate';
const About = () => {
  return (
    <div className='container about-section' id='about'>
        <div className='row'>
            <Rotate>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='Profile-pic'>
                        <img src={Profile} alt='Profile pic' />
                    </div>
                </div>
            </Rotate>   
            <Rotate top left>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-desc'>
                        <div className='about-title'>
                            <h2>About</h2>
                            <span className='line'></span>
                        </div>
                        <p className='about-detail'>
                        Hi there, My name is Tongmean Teang, or you can call me Tongmean. Let me brief myself, I was born in Kompong Thom, Cambodia.
                        I also completed my high school education at Kompong Chheuteal High School. After, I graduated high school, I got a scholarship opportunity from Princess
                        Maha Chakri Sirindhorn earned a bachelor's degree for exactly 4 years at Silpakorn University, Thailand. Currently, I am studying for a master's degree in engineering, majoring in industrial engineering. I got a scholarship from the (RDI project) at Compact International (1994) Co.,Ltd.
                        </p>
                    </div>
                </div>
            </Rotate>
        </div>
    </div>
  )
}

export default About