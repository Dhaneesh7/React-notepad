import './Card.css'
export const Card=({data,deletecard})=>{
    const styles={
        width:"10%",
        border:"2px solid hsl(0,0%,70%)",
        
        borderRadius:"5px",
        boxShadow:"5px 5px 5px hsla(0,0%,0%,0.5)",
        padding:"10%",
        margin:"10px",
        textAllign:"center",
        
        display:"inlineBlock",
        display:"flex",
        justifyContent:"center",
        allignItems:"center",


    }
    const handleDelete=()=>deletecard(data.id);
    return(
        <div className="card"style={styles}>
            { <img src={data.img} alt="product picture" width={300} height={200}/> }
            <div>{data.name}</div>
            <div>{data.price}</div>
            <div><button onClick={handleDelete}>x</button></div>
        </div>
        
    )
}