// Опис компонента <Loader>
// Компонент спінера відображається, доки відбувається завантаження зображень. Використовуйте будь-який готовий компонент, наприклад react-loader-spinner або будь-який інший.
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <RotatingLines type="Oval" color="#2e3488" height={40} width={40} />
    </div>
  );
};

export default Loader;
