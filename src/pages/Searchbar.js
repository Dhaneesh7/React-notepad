import { useState } from "react";
import './search.css';
export const Searchbar = ({ fn, reset }) => {
    const [value, setValue] = useState("");

    const handleSearch = () => {
        fn(value);
    };

    const handleReset = () => {
        setValue(""); // Clear input when reset
        reset();
    };

    return (
        <div className="Searchbar" >
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};
