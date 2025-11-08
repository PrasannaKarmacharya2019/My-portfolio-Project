import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homepage';
import ProjectsPage from '../src/pages/projects/projects';
import ResumePage from '../src/pages/resume/resume'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
