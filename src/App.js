import Navbar from './components/navbar/Navbar';

import './styles/main.css';
import './styles/media.css';

import Footer from './components/Footer/Footer';
import MyProjects from './pages/MyProjects';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MyProjects />
      {/*<Skills />*/}
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
