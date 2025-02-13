import React from 'react';
import ThemeContext from './themeContext';
import { useContext } from 'react';

function Button() {
  const themeObject = useContext(ThemeContext);
  
  
  return (
   
        <button onClick={()=>themeObject.updateThem()} className={`${themeObject.themeName}-theme`}>
          Switch Theme
        </button>
      
  );
}

export default Button;
