import { useState } from "react"; 
import L1 from "./L1";
//import Edit from "./Edit";

const initialStudents = [
    {
        id: 1,
        image: "https://static.vecteezy.com/system/resources/thumbnails/033/837/660/small/happy-school-pupil-asian-boy-in-glasses-on-isolated-on-studio-background-with-copy-space-back-to-school-ai-generative-photo.jpeg",
        name: "dhaneesh",
        address: "thrissur",
        class: "11",
    },
    {
        id: 2,
        image: "https://thumbs.dreamstime.com/b/high-school-student-29699566.jpg",
        name: "bhadran",
        address: "thrissur",
        class: "11",
    },
    {
        id: 3,
        image: "https://static.vecteezy.com/system/resources/thumbnails/033/837/660/small/happy-school-pupil-asian-boy-in-glasses-on-isolated-on-studio-background-with-copy-space-back-to-school-ai-generative-photo.jpeg",
        name: "sonu",
        address: "shornnur",
        class: "12",
    },
    {
        id: 4,
        image: "https://www.shutterstock.com/image-photo/cute-little-indian-asian-school-260nw-1410159560.jpg",
        name: "adarsh",
        address: "thrissur",
        class: "11",
    },
];

function Project1() {
    const [students, setStudents] = useState(initialStudents);
    

    const deleteStudent = (deleteId) => {
        const updatedList = students.filter(student => student.id !== deleteId);
        setStudents(updatedList);
    };

    return (
        <>
            <L1 studentlist={students} deletefn={deleteStudent} />
            
          
        </>
    );
}

export default Project1;
