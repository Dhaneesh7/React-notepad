import { useState } from "react";
import { useEffect } from "react";
import './Load.css';
//import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Progressb(){
    const [progress,setProgress]=useState(0);
    const navigate= useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    navigate("/login");

                    return 100; // Ensure it doesn't go over 100
                }
                return prev + 15; // Increase progress by 10
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return(
        <>
        <div className="d1">.
            <div className="d2" style={{
                    width: `${progress}%`,
                
                    
                    borderRadius: '5px',
                    transition: 'width 0.9s'
                }}>.
                </div></div></>
    )
    
}
export default Progressb;