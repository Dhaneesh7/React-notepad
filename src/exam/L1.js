import Card from "./Card";

function L1({ studentlist, deletefn }) {
    return (
        <div>
            {studentlist.map(({ id, ...student }) => (
                <div>
                <Card 
                    key={id} 
                    data={student} 
                    deletecard={() => deletefn(id)} 
                />
                </div>
            ))}
        </div>
    );
}

export default L1;
