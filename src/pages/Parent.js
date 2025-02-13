import { useCallback, useState } from "react"
export default Parent;
function Parent(){
  //  const[state,setState]=useState(0);
   // setState()
   const[datafromchild,setDatafromchild]=useState();
   function callback(names){
    setDatafromchild(names);
   } 
   return(
        <>
        <div>{names}</div>
<Child callbackfn={callback} />
        </>
    )
}
function Child(callbackfn){

    const [names,setNames]=useState(0);
    return(
    <>
    <input type="text" value={names} onChange={(e)=>e.target.value}></input>
    <button onClick={()=>callbackfn(names)}>.pass</button>
        </>)
}

