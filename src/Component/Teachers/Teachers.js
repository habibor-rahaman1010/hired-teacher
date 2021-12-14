import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [cart, setCart] = useState([])

    const handleClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        const URL = `./data/teachers.JSON`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setTeachers(data))
    }, [])


    return (
        <div className='main'>
            <div className='teachers'>
                {teachers.map((teacher) => <Teacher data={teacher} handleClick={handleClick} key={teacher.key}></Teacher>)}
            </div>

            <div className='cart'>
                <h2>My teachers cart</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Teachers;