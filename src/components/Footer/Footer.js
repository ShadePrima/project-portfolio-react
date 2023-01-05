import './style.css';

import gitHub from '../../img/icons/gitHub.svg';
import instagram from '../../img/icons/instagram.svg';
import linkedin from '../../img/icons/linkedin.svg';
import twitter from '../../img/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            {/* <li className='social__item'>
              <a href='#!'>
                <img src={instagram} alt='instagram' />
              </a>
            </li> */}
            {/* <li className='social__item'>
              <a href='#!'>
                <img src={twitter} alt='twitter' />
              </a>
            </li> */}
            <li className='social__item'>
              <a
                href='https://github.com/ShadePrima'
                target='_blank'
                rel='noreferrer'
              >
                <img src={gitHub} alt='gitHub' />
              </a>
            </li>
            <li className='social__item'>
              <a
                href='https://www.linkedin.com/in/aleksandr-aniskevych-961698235/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedin} alt='linkedIn' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>
              <a
                className='footer-link-mail'
                href='mailto:aleksandrag1984@gmail.com'
              >
                aleksandrag1984@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
