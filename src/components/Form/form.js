import React , {useRef } from 'react'
import './form.css'
import FaceBookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const PortForm = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input type = "text" className='name' placeholder='Your Name' />
                <input type = "email" className='email' placeholder='Your Email' />
                <textarea name = "message" rows = "5" placeholder='Your Message' className='msg'/>
                <button type = "submit" value = 'send' className='submitBtn'>Submit</button>
            
                <div className='links'>
                    <img src = {FaceBookIcon} alt = "fb" className='link' />
                    <img src = {TwitterIcon} alt = "fb" className='link' />
                    <img src = {YouTubeIcon} alt = "yt" className='link' />
                    <img src = {InstagramIcon} alt = "inst" className='link' />
                </div>
            </form>
        </>
    )
}

export default PortForm;