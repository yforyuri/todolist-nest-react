import React, { FC, useEffect } from 'react';
import axios from 'axios';

const Todolist: FC = () => {

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await axios.get('http://localhost:3010/todo');
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        getTodos();
    }, []);
    return <div>Todolist</div>
};

export default Todolist;