import Navbar from './components/navbar/Navbar';

import './styles/main.css';
import './styles/media.css';

import Footer from './components/Footer/Footer';
import MyProjects from './pages/MyProjects';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Projects />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
