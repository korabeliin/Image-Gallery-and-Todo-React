import React, {useMemo} from 'react';

import styles from './Button.module.css';

const Button = ({text, variation, ...props}) => {

  const buttonClasses = useMemo(() => {
    switch (variation) {
      case 'delete_and_cancel':
        return styles.deleteAndCancelButtons
      case 'normal':
      default:
        return styles.normalButton
    }
  }, [variation])

  return (
    <button className={buttonClasses} {...props}>
      {text}
    </button>
  );
};

export default Button;