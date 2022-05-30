import React, {useState} from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from './ImagesSearchForm.module.css';

const ImagesSearchForm = ({ onSubmit, searchQuery }) => {

    const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.searchQuery.value)
  }
  
  return (
      <div className={styles.form_wrapper}>
          <form
              onSubmit={handleSubmit}
              className={styles.imageSearchContainer}
              autoComplete='off'
          >
              <Input name='searchQuery' placeholder='Search'
                     value={inputValue}
                     onChange={e => setInputValue(e.target.value)}/>
              <Button text='Go!' variation='normal' />
          </form>
      </div>
  );
};

export default ImagesSearchForm;