// Опис компонента <ImageGalleryItem>
// Компонент елемента списку із зображенням. Створює DOM-елемент наступної структури.

// <li class="gallery-item">
//   <img src="" alt="" />
// </li>
import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const { webformatURL, largeImageURL } = image;

  const handleClick = () => {
    onImageClick(largeImageURL);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt=""
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
