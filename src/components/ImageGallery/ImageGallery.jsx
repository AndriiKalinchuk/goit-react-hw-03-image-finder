// Опис компонента <ImageGallery>
// Список карток зображень. Створює DOM-елемент наступної структури.

// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
