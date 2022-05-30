import React from 'react';
import Loading from '../../common/Loading/Loading';

import styles from './ImagesList.module.css';

const ImagesList = ({images, loading}) => {

  if(loading) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Loading />
      </div>
    )
  }

  return (
    <div className={styles.imagesContainer}>
      {images.map(image => (
        <div key={image.id}>
          <div className={styles.imagesWrapper}>
            <img src={image.url} alt={image.alt} />
            <span>{image.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesList;