import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './resume.css'; // Import the CSS file

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main style={{padding:'80px 32px', minHeight:'60vh', textAlign: 'center' }}>
        <div className="resume-images">
          <img 
            src="/Resumae/page_1.jpg" 
            alt="Resume Page 1" 
            className="resume-image"
          />
          
        </div>
        
        <a 
          href="/Resumae/Prasanna_Karmacharya_Resume.docx" 
          download
          className="download-button"
        >
          Download My CV
        </a>
      </main>
      <Footer />
    </>
  );
}