import { useState } from "react";
const arr=[{
    name:"s1",
    price:"100",

},
{
    name:"s2",
    price:"200",
},
]
function Search(){
    return(
        <>
        <input type=" text"></input>
        <button onClick={srfn}>search</button>
        </>
    )
}
function srfn(){
    const [sr,setsr]=useState("");
    const result=arr.filter((v)=>v.item.includes(item));
    setsr(result);
}
return(
    <>
    <></></>
)

