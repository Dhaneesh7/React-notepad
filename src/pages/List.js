import { Card } from './Card';

export const List = ({ productlist, deletefn }) => {
    return (
        <div>
            {productlist.map(product => {
                return (
                    <Card 
                        key={product.id} 
                        data={product} 
                        deletecard={deletefn} 
                    />
                );
            })}
        </div>
    );
};
