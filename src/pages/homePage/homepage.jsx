import React, { useEffect, useState } from 'react';
import './homePage.css';
import Navbar from '../../components/navbar/navbar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';



export default function HomePage() {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
  
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

 

  return (
    
    <div className="home-root">
     
       <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="hero container">
        <div className="hero-left">
          <div className="badge">Hello I am</div>
          <h1 className="hero-title">
            Prasanna<br/>Karmacharya
          </h1>
          <p className="hero-sub">
         I’m an Electronics and Communication Engineer who bridges hardware and software crafting responsive web interfaces and building intelligent systems that merge code, circuits, and creativity. </p>

        <Link className="cta" to="/projects">See All Projects →</Link>
          <ul className="socials">
            <li><a aria-label="github" href="https://github.com/PrasannaKarmacharya2019"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.97-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.93 10.93 0 0 1 12 6.8c.97.01 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg></a></li>
            <li><a aria-label="linkedin" href="https://www.linkedin.com/in/prasanna-karmacharya-29432b278/"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5C4.98 4.6 4.11 5.5 2.98 5.5S1 4.6 1 3.5C1 2.39 1.87 1.5 2.98 1.5 4.11 1.5 4.98 2.39 4.98 3.5zM.5 8h4.98V24H.5zM8.5 8h4.78v2.17h.07c.67-1.27 2.3-2.61 4.74-2.61 5.08 0 6.02 3.34 6.02 7.68V24h-4.98v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.85-2.72 3.76V24H8.5z"/></svg></a></li>
            {/* <li><a aria-label="dribbble" href="#"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.86 6.2c1.3 1.84 1.9 4.06 1.66 6.26-1.97-.24-4.02-.27-6.05.01-.36-.86-.72-1.66-1.1-2.36 3.32-1.44 4.87-3.52 5.5-3.91zM12 2.2c2.62 0 4.98.98 6.78 2.6-.57.35-2.1 1.99-5.3 3.35-1.31-2.34-2.63-4.22-2.9-4.54.96-.46 2.03-.86 3.42-.86zM4.1 4.87c.28.33 1.66 2.17 2.98 4.53-3.07 1.1-5.41 1.04-6.92 1.01.77-3.06 3.12-5.16 3.94-5.54zM2.2 12c0-.07 0-.15.01-.22 1.2.03 3.42.14 6.26-.9.46.98.88 2.08 1.26 3.24-3.68 1.02-6.56.88-7.53.03-.06-.06-.12-.13-.15-.21.05-.27.15-.55.15-.93zM12 21.8c-2.67 0-5.08-.98-6.86-2.6.56-.37 2.05-1.99 5.22-3.33.68 1.21 1.32 2.5 1.87 3.87.67.36 1.38.66 2.11.88-1.02.64-2.2 1.18-3.34 1.18zM19.9 19.13c-.5-.16-1.8-.51-3.3-.47-.07-.2-.15-.38-.22-.57 2.1-.36 4.08-1.11 5.43-2.44.03.1.06.2.06.31 0 1.27-.44 2.41-1.97 3.17z"/></svg></a></li> */}
               <li>
  <a aria-label="facebook" href="https://www.facebook.com/prasannamank/" target="_blank" rel="noopener noreferrer">
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-2.205 0-3.056 1.153-3.056 3.015v2.122H9z"/>
    </svg>
  </a>
</li>
               </ul>

        </div>

        <div className="hero-right">
          <DotLottieReact
    src="https://lottie.host/15beff5c-f9e9-4337-bbe9-50ba4c2c9bf4/R95f9qDnNn.lottie"
    loop
    autoplay
    className="illustration"
    
  />

  {/* <DotLottieReact
      src="https://lottie.host/7952b611-6a22-40f2-8761-8d110ec0a86b/Gh19KWazBA.lottie"
      loop
      autoplay
    /> */}

          
        </div>
      </main>
    </div>
  );
}