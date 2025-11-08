import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './projects.css';


const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360); // Random hue
  return `hsl(${hue}, 50%, 80%)`; // Low saturation, high lightness = soft pastel
};

const getSimpleGradient = () => {
  const color1 = getRandomPastelColor();
  const color2 = getRandomPastelColor();
  return `linear-gradient(90deg, ${color1}, ${color2})`;
};

export default function ProjectsPage() {
  const [gradients, setGradients] = useState([]);


  useEffect(() => {
    const generatedGradients = Array.from({ length: 6 }, () => getSimpleGradient());
    setGradients(generatedGradients);
  }, []);

  const projects = [
    { id: 1, title: 'Dummy Netflix', image: "/photos/dummy_Netflix.png", url: '#' },
    { id: 2, title: 'Catalog', image: '/photos/catalog.png', url: '#' },
    { id: 3, title: 'Hotel site design', image: '/photos/hotel_site_design.png', url: '#' },
    { id: 4, title: 'ICON-website', image: '/photos/Icon_website.png', url: '#' },
    { id: 5, title: 'Old Portfolio', image: '/photos/old_portfolio.png', url: '#' },
    { id: 6, title: 'Portfolio', image: '/photos/Portfolio.png', url: '#' },
  ];

  return (
    <>
      <Navbar />
      <main className="projects-root container">
        <h1 className="projects-title"> Project Wardrobe</h1>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <a className="project-card" key={p.id} href={p.url} target="_blank" rel="noreferrer">
              <div className="project-thumb" style={{ background: gradients[index] }}>
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-title">{p.title}</div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}