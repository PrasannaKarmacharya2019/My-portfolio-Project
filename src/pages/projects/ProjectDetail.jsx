import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import projectsData from '../../data/projectsData';
import './projects.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => String(p.id) === String(id));

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ padding: '80px 64px' }}>
          <h2>Project not found</h2>
          <p>The requested project does not exist.</p>
          <Link to="/projects">Back to Projects</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container project-detail-root">
        <h1 className="project-detail-title">{project.title}</h1>

        <section className="project-hero">
          <div className="detail-thumb" style={{ background: 'linear-gradient(90deg,#2b6cb0,#2563eb)'}}>
            <div className="detail-inner">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </section>

        <section className="project-content">
          <h3>About</h3>
          <p>{project.about}</p>

          <h4>My Role / Tech Stack</h4>
          <div className="tech-badges">
            {project.tech.map((t, i) => (
              <span className="tech-badge" key={i}>{t}</span>
            ))}
          </div> 

          <h4>Website</h4>
          <p><a href={project.website} target="_blank" rel="noreferrer">{project.website}</a></p>
        </section>

      </main>
      <Footer />
    </>
  );
}