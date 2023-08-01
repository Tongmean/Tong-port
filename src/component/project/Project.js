import React from 'react'
import './project.css'
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Projectlist from './Projectlist'
const Project = () => {
    const data =[
        {
            name:"Mern stack",
            desc:"By using mern(Mongo DB, Express, React, Node) stack to create Crud Operation + Authentication (JWT Token)",
            Projectlink:"",
            techuse:[
                {
                    name:"React"
                },
                {
                    name:"Express"
                },
                {
                    name:"Node"
                },
                {
                    name:"Mongo DB"
                }
            ]

        },
        {
            name:"The Discrepancy Port",
            desc:"By using Django Framework (Python) to Create discrepancy Portal, Which keep track all information about logistic Activity",
            Projectlink:"",
            techuse:[
                {
                    name:"Django"
                },
                {
                    name:"Mysql(DB)"
                },
                {
                    name:"Jquery"
                },
                {
                    name:"DataTable"
                }
            ]

        },

    ]
  return (
    <div className='container project-section' id='project'>
        <Rotate>
        <div className='project-title'>
            <h2>Project</h2>
            <span className='line-project'></span>
        </div>
        </Rotate>
        <Bounce top>
        <div className='row'>
            {data.map((item,index)=>(
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                    <Projectlist {...item}/>
                </div>
            ))}    

        </div>
        </Bounce>
    </div>
  )
}

export default Project