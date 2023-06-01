// Опис компонента <Modal>
// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і відображатися велика версія зображення. Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого модального вікна рендериться зображення (у прикладі натисніть Run). Анімацію робити не потрібно!

import React from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) {
    return null;
  }

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={css.Overlay}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className={css.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
