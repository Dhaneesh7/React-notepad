import { useState } from 'react';
import './Load.css';

function Load() {
const [progre,setProgre]=useState(0);

    return(
        <>
        <div className="d1">
            <div className="d2" style={{width:progre*3}}></div>
</div>
        
        
            <input type="text" id='pr' name='pr' onChange={(e)=>{setProgre(e.target.value);}}></input>

        </>
    )
}
export default Load;