import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { name, age, img, experience, salary, subject, key } = props.data;

    return (
        <div className='maindiv'>
            <div className='img'><img src={img} alt="avatar" /></div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Experience: {experience}</p>
            <p>Subject: {subject}</p>
            <p>Salary: {salary}</p>
            <button className='button' onClick={() => props.handleClick(props.data)}>Add To Teacher</button>
        </div>
    );
};

export default Teacher;