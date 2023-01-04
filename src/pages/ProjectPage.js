import React from 'react';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import img from '../img/projects/01-big.jpg';

const ProjectPage = () => {
  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>My old portfolio</h1>
          <a href='https://portfolio-cv-aleksandr-git-main-shadeprima.vercel.app'>
            <img src={img} alt='project' className='project-details__cover' />
          </a>
          <div className='project-details__desc'>
            <p>Skills: Html, CSS, JS, React</p>
          </div>
          <BtnGitHub link='https://github.com/ShadePrima' />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
