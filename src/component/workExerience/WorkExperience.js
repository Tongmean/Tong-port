import React from 'react'
import './workExperience.css'
import { FcAbout } from 'react-icons/fc'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
const WorkExperience = () => {
    const data = [
        {
            name: "Compact international (1994) co.,ltd. ",
            desc: "Work on Digital transformation project, Which to Study each Department then try to transform from paper work to digital",
            tech: [
                {
                    name: "Draw io",

                },
                {
                    name: "Excel",
                },
            ],
        },
        {
            name: "Western Digital (Thailand) Co., Ltd.",
            desc: "Work on Discrepancy Portal project, Which is to develop Full stack Discrepancy Portal system to keep track all discrepancy Data during logistic Process",
            tech: [
                {
                    name: "Django",

                },
                {
                    name: "MySql",
                },
                {
                    name: "Jquery",
                },
                {
                    name: "DataTable",
                },
            ],
        },

    ]
    const color = [
        "#030303da",
        "darkblue"

    ]
    const icon =[
        <FcAbout />,
        <FcAbout/>,
    ]
    return (
        <div className='container workExperience' id='experience'>
            <div className='WorkExperience-title'>
                <h2>
                    Work Experience
                </h2>

            </div>
            <div>
                <p className='line-workExperience'></p>
            </div>

            <VerticalTimeline lineColor='#030303da'>
                {data.map((item,index)=>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:color[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background:color[index], color: '#fff' }}
                    icon={icon[index]}
                    key={index}
                    >
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                    <div className='row'>
                        {item.tech.map((t ,index)=>(
                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>

                                <div className='tech-name'>
                                    <p>
                                        {t.name}
                                    </p>
                                </div>
                            </div>    
                        ))}
                        
                    </div>
                    <p>
                        {item.desc}
                    </p>
                </VerticalTimelineElement>

                ))}
                
            </VerticalTimeline>
        </div>
    );
};
export default WorkExperience