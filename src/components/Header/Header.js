import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Alex</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className='header__text'>
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href='https://docs.google.com/document/d/1_HqQI6I41Qp97iSS_LIPUY6rsy0K05kX/edit?usp=share_link&ouid=102947361476884136228&rtpof=true&sd=true'
          target='_blank'
          rel='noreferrer'
          className='btn'
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
