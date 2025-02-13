import { useState } from "react";
// import {render} from 'react-dom'
function welcome({ username, age }) {
    return <h1>welcome{username}{age}</h1>;
}
//var counter=0;
/*function ups(){
    counter=counter+1;
    console.log(counter);
}
*/
function Counts() {
    const [counter, setCounter] = useState(0);
    const username = 'dgsdg';
    const details = { name: "dhaneesh", age: 22, mobile: "1232213454" }
    function buttonClicks() {
        setCounter(counter + 1);
    }
    return (
        <div>

            counter

            <button onClick={buttonClicks}>+</button><br></br>
            {counter}
            {<welcome name={username}
                age="30" />};
        </div>
    )
}

export default Counts;