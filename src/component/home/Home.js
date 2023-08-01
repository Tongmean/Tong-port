import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Resume from './TonmeanResume.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
function Home({theme, changeTheme}) {
  return (
    <div>
        <div className='container-fluid home' id='home'>

          <Fade bottom>
            <div className='theme-change' onClick={changeTheme}>
                
                {theme ==="light" ? (<p><BsFillMoonStarsFill size={25}/></p>):(<p className='sun-theme-icon'>< BsFillSunFill size={25} /></p>)}
              
            </div>

            <div className='container home-content'>
                <h1> 
                    Hello, I'm Tongmean,
                </h1>
                <h2>
                <Typewriter
                  options={{
                    strings: ["Silpakorn University",'Electronics and Computer Systems Engineering', 'Industrial Engineering'],
                    autoStart: true,
                    loop: true,
                    delay:5,
                    
                  }}
                />

                </h2>
                <div className='button-for-action'>
                  <div className='hire-me-button'>
                    Hire me
                  </div>
                  <div className='get-resume-button'>
                    <a href={Resume} download="resume.pdf">Get Resume</a>
                  </div>
                </div>
            </div>
          </Fade>
        </div>
    </div>
  )
}

export default Home;