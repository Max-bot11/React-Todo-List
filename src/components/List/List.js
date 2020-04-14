import React from 'react';
import Card from './Card';

function List (props) {
    // console.log(props)
    return (
        <ol>
            {props.data.map((contact, index)=>(
                <Card 
                key={index}
                firstName={contact.firstName}
                lastName={contact.lastName}
                age={contact.age}
                born={contact.born}
                profession={contact.profession}
                onDelete={()=>props.onDelete(index)}
                status={contact.status}
                onChangeStatus={()=>props.onChangeStatus(index)}
                />
            ))}
        </ol>
    );
}


export default List;