import React from 'react';
import { saveAs } from 'file-saver';
import './About.scss';
import axios from "axios";
const About = (props) => {
  const routeChange= () => {
    let path = `/contact`;
    props.history.push(path);
  }

  const handleDownloadpdf = () => {
    axios({
      url: '/api/cv',
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'CV.pdf');
    
    }).catch(err => console.log(err));
  }
  return (
    <div className='about-container'>
      <div className='about-title'>
        <h2>About</h2>
      </div>
      <div className='about-body'>
        <p>'Feel free to'</p>
      <div className ='contact-options'>
        <button className = 'download-cv' onClick = {handleDownloadpdf}>Download CV</button>
        <button className = 'get-in-touch' onClick = {routeChange}>Get In Touch</button>
      </div>
      </div>
      <div className = 'about-footer'>
        This app was made using React
      </div>
    </div>
  );
};

export default About;
