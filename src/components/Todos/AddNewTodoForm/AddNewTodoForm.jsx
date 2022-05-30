import { Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import * as Yup from 'yup';
import styles from './AddNewTodoForm.module.css'

const AddNewTodoForm = ({ onAddNewTodo }) => {

  const handleSubmit = useCallback(values => {
    onAddNewTodo && onAddNewTodo(values.todo);
  }, [onAddNewTodo]);
  
  const validationSchema = Yup.object().shape({
    todo: Yup.string().required("This field shouldn't be empty")
  });

  return (
    <>
      <Formik
        initialValues={{
          todo: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {props => {
          return(
            <Form autoComplete='off' className={styles.addTodoForm}>
                <Field name='todo'>
                  {
                    ({field, form, meta}) => {
                      return (
                        <Input
                          value={field.todo}
                          type="text"
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                          error={form.errors.todo}
                        />
                    )}
                  }
                </Field>
              <Button text='Add Todo' type='submit' />
            </Form>
          )
        }}
      </Formik>
    </>

    
  );
};

export default AddNewTodoForm;