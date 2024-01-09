import React from 'react'
import './contact.css'
import wallmart from "../../assets/walmart.png"
import microsoft from "../../assets/microsoft.png"
import adobe from "../../assets/adobe.png"
import facebook from "../../assets/facebook.png"
import PortForm from '../Form/form'


const Contact = () =>{
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>I Have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src = {wallmart} alt = "bank" className='clientImg'/>
                <img src = {microsoft} alt = "bank" className='clientImg'/>
                <img src = {adobe} alt = "hsa" className='clientImg'/>
                <img src = {facebook} alt = "tyres" className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDes'>Please fill out the form below to discuss any work opportunities.</span>
            <PortForm />
        </div>
    </section>
  )
}

export default Contact;