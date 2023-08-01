import React from 'react'
import './techstack.css'
import { useState } from 'react'
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
const Techstack = () => {

  const data = [
    {
      name:"Djano Python"
    },
    {
      name:"HTML"
    },
    {
      name:"REACT JS"
    },
    {
      name:"Python"
    },
    {
      name:"CSS"
    },
    {
      name:"Javascript"
    },
    {
      name:"Bootsrap"
    },
    {
      name:"Express JS"
    },
    {
      name:"MySQL"
    },
    {
      name:"Mongo DB"
    },
  
    {
      name:"Google Data Studio"
    },
  
  ]
  const color =[
    "red",
    "blue",
    "orange",
    "green",
    "purple",
    "black",
    "darkblue",
    "red",
    "orange",
    "red",
    "orange",
    "blown",

  ]
  const [showMoreTech, setshowMoreTech] = useState(6)
  const loadMore = () => {
    setshowMoreTech((prev) => prev+3);
  }

  return (
    <div className='container tech-stack' id='tech-stack'>
      <Flip top>
      <div className='tech-stack-title'>
        <h2>Tech Stack</h2>
        <span className='line-tech-stack'></span>
      </div>
      </Flip>
      <Slide bottom>
      <div className='row'>
        {data.slice(0, showMoreTech).map((item,index) => (
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
            <div className={index === 0 ? 'tech-content-mark tech-content':'tech-content'}>
              <span className='tech-num' style={{backgroundColor:color[index]}}>{index + 1}</span>
              <p>
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      </Slide>
      <Slide right>
        {showMoreTech >= data.length ? (""):(
          <div className='load-mor-tech' onClick={loadMore}>
            load more
          </div>
        )}
      </Slide>
    </div>
  )
}

export default Techstack;