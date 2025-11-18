import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './projects.css';

import projectsData from '../../data/projectsData';

const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 50%, 80%)`;
};

const getSimpleGradient = () => {
  const color1 = getRandomPastelColor();
  const color2 = getRandomPastelColor();
  return `linear-gradient(90deg, ${color1}, ${color2})`;
};

export default function ProjectsPage() {
  const [gradients, setGradients] = useState([]);

  useEffect(() => {
    const generatedGradients = Array.from({ length: projectsData.length }, () => getSimpleGradient());
    setGradients(generatedGradients);
  }, []);

 
  const projects = projectsData;

  return (
    <>
      <Navbar />
      <main className="projects-root container">
        <h1 className="projects-title"> Project Wardrobe</h1>
        <div className="projects-grid">
          {projects.map((p, index) => (
         
            <Link className="project-card" key={p.id} to={`/projects/${p.id}`} onClick={() => window.scrollTo(0,0)}>
              <div className="project-thumb" style={{ background: gradients[index] }}>
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-title">{p.title}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}