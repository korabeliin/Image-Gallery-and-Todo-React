import React from 'react';

import TodosListItem from '../TodosListItem/TodosListItem';
import styles from "./TodosList.module.css";

const TodosList = ({ todos, onDelete}) => {

  return (
    <ul className={styles.todosListContainer}>
      {todos.map(todo => (
        <TodosListItem 
          key={todo.id}
          text={todo.text} 
          onDelete={onDelete}
          todo={todo}
          id={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodosList;