import './Login.css';
//import Home from './Home';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const passref=useRef();

   // const [user,setUser]=useState(0);
    //setUser(user);
    //const [pass,setPass]=useState(0);
    //setPass(pass);
    const navigate=useNavigate();
    const passw="123";
   const unameref=useRef();
   const uname="dhaneesh";
   function b1(){

    if(unameref.current.value == uname && passref.current.value == passw){
        navigate("/Home")
    }
}

    return(
        <div className="log">
            <h1>Login Form</h1>
            <label>username</label>
            <input type="text" placeholder="username" className='n1' id='n1' ref={unameref}></input><br></br>
            <label>password</label>
            <input type="password" placeholder="password" className='p1' id='p1' ref={passref}></input><br></br><br></br>
            <button className='log' onClick={b1} >login</button>
        </div>
    )
}
export default Login;