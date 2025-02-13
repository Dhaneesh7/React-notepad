import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
//import { useState } from "react";
//import ThemeContext from "./themeContext";

function Routem() {
   // const [theme, setTheme] = useState('light');

 /* const themeData = {
    themeName: theme,
    updateThem: () => {
      setTheme(theme === 'dark' ? 'light': 'dark' )
    }
  };*/
    return (
      
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login />} ></Route>
               < Route path='/Home' element={<Home />}></Route>
                
            </Routes>
        </BrowserRouter>
      
    );
}

export default Routem;
