import React, { useState, FC, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import AddTodo from './AddTodo';
import { async } from 'q';

interface Itodo {
  id: number;
  createAt: Date;
  updateAt: Date;
  title: string;
  desc: string;
  isComplete: boolean;
}

const Todolist: FC = () => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error } = useSWR<Itodo[]>(
    `${process.env.REACT_APP_BACK_URL}/todo`,
    fetcher,
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <AddTodo />
      {data.map((todo) => {
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
