import React from 'react'
import './skills.css';
import content from '../objects/content';

const Skills = () =>{
  return (
    <section id = "skills">
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in JavaScript,Reactjs and nodejs.</span>
      <div className='skillBars'>
        {content.map((item , index) => (
           <div className='skillBar' key = {index}>
           <img src = {item.imgSrc} alt = "uiimg" className='skillBarImg'/>
           <div className='skillBarText'>
             <h2>{item.title}</h2>
             <p>{item.description}</p>
           </div>
         </div> 
        ))}
      </div>
    </section>
  )
}

export default Skills;