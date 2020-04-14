import React from 'react';

function Card (props) {
    return (
        <li className={`${props.status ? 'completed' : ''}`}>
            <div>First Name: {props.firstName}</div>
            <div>Last Name: {props.lastName}</div>
            <div>Age: {props.age}</div>
            <div>Born: {props.born}</div>
            <div>Profession: {props.profession}</div>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onChangeStatus}>Change Status</button>
        </li>
    );
}

export default Card;