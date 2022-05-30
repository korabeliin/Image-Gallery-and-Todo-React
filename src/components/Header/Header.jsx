import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.headerLink} to='/gallery'>GALLERY</Link>
      <Link className={styles.headerLink} to='/todos'>TODOS</Link>
    </div>
  );
};

export default Header;