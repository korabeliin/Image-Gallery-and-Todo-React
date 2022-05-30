import React, { useState } from 'react';

import AddNewTodoForm from '../../components/Todos/AddNewTodoForm/AddNewTodoForm';
import TodosList from '../../components/Todos/TodosList/TodosList'
import styles from './Todos.module.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODO, DELETE_TODO} from "../../redux/slices/todosSlice";

const Todos = () => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleTodoAdding = text => {
    const newTodo = {
      id: Date.now(),
      text,
    }

    dispatch(ADD_TODO(newTodo))
  }

  const handleTodoDeleting = todo => {
    dispatch(DELETE_TODO(todo.id))
  }

  return (
    <div className={styles.todosContainer}>
      <AddNewTodoForm todos={todos} onAddNewTodo={handleTodoAdding} />
      <TodosList todos={todos} onDelete={handleTodoDeleting} />
    </div>
  );
};

export default Todos;