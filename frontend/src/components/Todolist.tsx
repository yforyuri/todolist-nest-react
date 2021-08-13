import React, { useState, FC, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';

interface Itodo {
  id: number;
  createAt: Date;
  updateAt: Date;
  title: string;
  desc: string;
  isComplete: boolean;
}

const Todolist: FC = () => {
  const [todos, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/todo`,
        );

        if (response.statusText == 'OK') {
          setTodos(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <AddTodo />
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.id} - {todo.title} - {todo.desc}
          </li>
        );
      })}
    </div>
  );
};

export default Todolist;
