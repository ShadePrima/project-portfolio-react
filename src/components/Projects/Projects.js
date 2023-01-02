import './styles.css';

import myOldPortfolio from '../../img/projects/my-old-portfolio.png';
import fotoColection from '../../img/projects/foto-colection.png';
import myOldCss from '../../img/projects/my-old-css.png';
import quteMachina from '../../img/projects/qute-machina.png';
import reactPizza from '../../img/projects/react-pizza.png';
import reactSnykers from '../../img/projects/react-snykers.png';

const Projects = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>Projects</h2>
        <ul className='projects'>
          <li className='project'>
            <a href='./project-page.html'>
              <img
                src={myOldPortfolio}
                alt='project'
                className='project__img'
              />
              <h3 className='project__title'>My old portfolio</h3>
            </a>
          </li>
          <li className='project'>
            <a href='./project-page.html'>
              <img src={reactSnykers} alt='project' className='project__img' />
              <h3 className='project__title'>React Snykers</h3>
            </a>
          </li>
          <li className='project'>
            <a href='./project-page.html'>
              <img src={quteMachina} alt='project' className='project__img' />
              <h3 className='project__title'>Qute Machina</h3>
            </a>
          </li>
          <li className='project'>
            <a href='./project-page.html'>
              <img src={myOldCss} alt='project' className='project__img' />
              <h3 className='project__title'>Example css</h3>
            </a>
          </li>
          <li className='project'>
            <a href='./project-page.html'>
              <img src={fotoColection} alt='project' className='project__img' />
              <h3 className='project__title'>Foto Colection</h3>
            </a>
          </li>
          <li className='project'>
            <a href='./project-page.html'>
              <img src={reactPizza} alt='project' className='project__img' />
              <h3 className='project__title'>React Pizza</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
