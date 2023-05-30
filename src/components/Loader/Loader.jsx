// Опис компонента <Loader>
// Компонент спінера відображається, доки відбувається завантаження зображень. Використовуйте будь-який готовий компонент, наприклад react-loader-spinner або будь-який інший.
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines type="Oval" color="#00BFFF" height={40} width={40} />
    </div>
  );
};

export default Loader;
