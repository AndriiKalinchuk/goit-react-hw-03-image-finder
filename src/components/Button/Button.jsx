// Опис компонента <Button>
// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
