import React from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import './style.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
  const btnRef = React.useRef(null);
  //   console.log('detectDarkMode', detectDarkMode());
  //   console.log('darkMode', darkMode);

  React.useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode, btnRef]);

  React.useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme:dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

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
