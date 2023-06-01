// Опис компонента <Button>
// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.
import React from 'react';
import css from './Button.module.css';
const Button = ({ onClick, children }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default Button;
