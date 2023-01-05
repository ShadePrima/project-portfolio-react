import React from 'react';
import './style.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState('light');
  const btnRef = React.useRef(null);

  React.useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode, btnRef]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <button ref={btnRef} onClick={toggleDarkMode} className='dark-mode-btn'>
      <img src={sun} alt='Light-mode' className='dark-mode-btn__icone' />
      <img src={moon} alt='Dark-mode' className='dark-mode-btn__icone' />
    </button>
  );
};

export default BtnDarkMode;
