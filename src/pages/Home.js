import { List } from './List';
import { Searchbar } from './Searchbar.js';
import { useState } from 'react';
import ThemeContext from './themeContext.js';
import Header from './Header.js';
import Button from './Button.js';
import './Home.css';
const productlist = [
    {
        id: 1,
        name: "tv",
        price: "15000",
        img: "https://electronicparadise.in/cdn/shop/files/SAMled.jpg?v=1701762179&width=1500"
    },
    {
        id: 2,
        name: "phone",
        price: "10000",
        img: "https://images-cdn.ubuy.co.in/64c4a6c86751b005950567d9-apple-iphone-x-64gb-unlocked-gsm-phone.jpg"
    },
];

export default function Home() {
    const [value, setValue] = useState(productlist);
  const [theme, setTheme] = useState('light');

  const themeData = {
    themeName: theme,
    updateThem: () => {
      setTheme(theme === 'dark' ? 'light': 'dark' )
    }
  };

    const deleteMainFn = (deleteId) => {
        const deletedList = value.filter(v => v.id !== deleteId);
        setValue(deletedList);
    };

    const resetFn = () => setValue(productlist);

    const searchFn = (item) => {
        const result = productlist.filter(v => v.name.toLowerCase().includes(item.toLowerCase()));
        setValue(result);
    };

    return (
       <>
           <ThemeContext.Provider value={themeData}>
<Header/>
<Button/>
            <Searchbar fn={searchFn} reset={resetFn} />
            <List productlist={value} deletefn={deleteMainFn} />
            </ThemeContext.Provider>
        </>
    );
}
