import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import ImagesGallery from './containers/ImagesGallery/ImagesGallery';
import Todos from './containers/Todos/Todos';

function Main() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/gallery' element={<ImagesGallery/>} />
          <Route path='/todos' element={<Todos/>} />
          <Route path='/' element={<ImagesGallery/>} />
        />
      </Routes>
    </>
    
  );
}

export default Main;
