import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from './TodosListItem.module.css';
import { CHANGE_TODO } from '../../../redux/slices/todosSlice';
import {useDispatch} from "react-redux";

const TodosListItem = ({todo, text, id, onDelete}) => {

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleDeleting = () => {
    onDelete && onDelete(todo);
  }

  const handleClickEdit = () => {
    setIsEditing(true);
  }

  const handleChangesSaving = () => {
    if(currentText) {
      dispatch(CHANGE_TODO({text: currentText, id: id }))
      setIsEditing(false);
    }
  }
  
  const handleClickCancel = () => {
    setIsEditing(false);
  }

  const handleInputChange = e => {
    const newValue = e.target.value;
    setCurrentText(newValue);
  }

  return (
    <li key={id} className={styles.todosListItem}>
      {isEditing ? (
      <>
          <Input 
            variation='editable'
            value={currentText}
            error={!currentText && 'This field should not be empty'}
            onChange={handleInputChange}
          />
          <div className={styles.buttonsContainer}>
          <Button 
            text='Save'
            onClick={handleChangesSaving}
            variation='normal'
          />
          <Button 
            text='Cancel'
            variation='delete_and_cancel'
            onClick={handleClickCancel}
          />
          </div>
        </>
        ) : (
        <>
          <span>{text}</span>
          <div className={styles.buttonsContainer}>
            <Button
              text='Edit'
              onClick={handleClickEdit}
              variation='normal'
            />
            <Button
              text='Delete'
              onClick={handleDeleting}
              variation='delete_and_cancel'
            />
            </div>
        </>
      )}
    </li>
  );
};

export default TodosListItem;