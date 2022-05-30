import React, { useMemo } from 'react';

import styles from "./Input.module.css";

const Input = ({error, variation, ...props}) => {

  const inputClasses = useMemo(() => {
    if(error) return styles.errorInput;

    switch (variation) {
      case 'error':
        return styles.errorInput;
      case 'editable':
        return styles.editableInput;
      case 'normal':
      default:
        return styles.normalInput;
    }
  }, [variation, error]);

  return (
    <div className={styles.inputContainer}>
      <input {...props} className={inputClasses} />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;