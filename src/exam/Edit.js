import { useRef ,useState} from "react"
import { useNavigate } from "react-router-dom";
function Edit(){
    const n1=useRef();
    const a1=useRef();
    const c1=useRef();
const [name,setName]=useState("");
const [address,setAddress]=useState("");
const [Class,setClass]=useState("");
const navi=useNavigate();
    return(
        <>
        <label className="namel">name</label>
        <input type="text" className="namet" ref={n1} onChange={setName(n1)}></input>
        <label className="addrl">address</label>
        <input type="text" className="addrt" ref={a1} onChange={setAddress(a1)}></input>
        <label className="classl">class</label>
        <input type="text" className="classt" ref={c1} onChange={setClass(c1)}></input>
        <button onClick={()=>{navi("/Project1")}}>ok</button>
        
        </>
    )
}
export default Edit;