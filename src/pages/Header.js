import React, { } from 'react';
import ThemeContext from './themeContext';
import { useContext } from 'react';

function Header(props) {
  const data = useContext(ThemeContext);

  return (

        <header className={`${data.themeName}-theme`}>
          <h2>{data.themeName === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      
  );
}

export default Header;
