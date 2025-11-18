import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homepage';
import ProjectsPage from '../src/pages/projects/projects';
import ResumePage from '../src/pages/resume/resume'; 
import ProjectDetail from './pages/projects/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
         <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
