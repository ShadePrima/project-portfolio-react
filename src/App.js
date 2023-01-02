import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';

import './styles/main.css';
import './styles/media.css';

import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
