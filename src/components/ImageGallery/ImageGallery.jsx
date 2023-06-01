// Опис компонента <ImageGallery>
// Список карток зображень. Створює DOM-елемент наступної структури.

// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} showModal={showModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.shape.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGallery;
