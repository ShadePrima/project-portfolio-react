const Skills = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Skills</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Frontend</h2>
            <p>
              HTML, CSS, SASS, JavaScript,
              <span className='none'>TypeScript,</span> ReactJS, Redux, Redux
              Toolkit, BootStrap, MaterialUI, Git, React Native.
              <span className='none'>TailwindCSS, </span>
            </p>
          </li>
          {/* <li className='content-list__item'>
            <h2 className='title-2'>Backend</h2>
            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
          </li> */}
          <li className='content-list__item'>
            <h2 className='title-2'>Languages</h2>
            <p>Ukrainian - Advanced</p>
            <p>Russian - Advanced</p>
            <p>English - Intermediate (B1)</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
