const Skills = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Skills</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Frontend</h2>
            <p>
              HTML, CSS, JavaScript,
              <span className='none'>TypeScript,</span> ReactJS, Redux, NPM,
              Yarn, BootStrap, MaterialUI,
              <span className='none'>TailwindCSS,</span>
              StyledComponents
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Backend</h2>
            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
