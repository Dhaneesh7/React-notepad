import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ data, deletecard }) {
    const navi =useNavigate;
    function navig(){
        navi("/Edit")
    }
    return (
        <div className="c1">
            <img src={data.image} alt="Student" width={300} height={200} />
            <div><p>{data.name}</p></div>
            <div><p>{data.address}</p></div>
            <div>
                <button onClick={navig}>Edit</button>
                <button> </button> 
            </div>
            <div>
                <button onClick={deletecard}>delete</button>
            </div>
        </div>
    );
}

export default Card;
