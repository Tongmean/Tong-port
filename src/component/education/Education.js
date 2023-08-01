import React from 'react'
import { FcAbout, FcAcceptDatabase } from 'react-icons/fc'
import './education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const Education = () => {
    const data = [
        {
            name:"Silpakorn University",
            major:"Industrial Engineering",
            year:"2023-2025",
            desc:"Joining WIL(Work Integrate Learning) Project Which create by Compact international (1994) co.,ltd.",

        },
        {
            name:"Silpakorn University",
            major:"Elecronics and Computer system Engineering",
            year:"2019-2023",
            desc:"A scholarship opportunity For cambodian Student from Princess Maha Chakri Sirindhorn earned a bachelor's degree for exactly 4 years.",

        },
        {
            name:"Kompong Chheuteal High school",
            major:"General knowledge",
            year:"2015-2018",
            desc:"High School which Build under Support form Princess Maha Chakri Sirindhorn since 2000 in Kompong Thom, Cambodia",

        },
        {
            name:"Sombor Secondary School",
            major:"General knowledge",
            year:"2012-2015",
            desc:"",

        },
    ]
    const color = [
        "#422368",
        "#A05647",
        "#364598",
        "#496FA5",
    ]
    const icon =[

        <FcAbout/>,
        <FcAcceptDatabase/>,
        <FcAbout/>,
        <FcAcceptDatabase/>,
    ]

  return (
    <div className='container education-section' id='education'>
        <div className='Education-title'>
            <h2>Education</h2>
            <span className='line-EDUCATION'></span>
        </div>
        <div className='Education-content '>
            <VerticalTimeline lineColor='darkblue' >
                {data.map((item,index)=>(
                    <VerticalTimelineElement
                    key = {index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:color[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.year}
                    dateClassName='date-class'
                    iconStyle={{ background:color[index], color: '#fff' }}
                    icon={icon[index]}
                    >
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.major}</h4>
                    <p>
                        {item.desc}
                    </p>
                </VerticalTimelineElement>

                ))}
                
            </VerticalTimeline>

        </div>

        

        
        

    </div>
  )
}
export default Education