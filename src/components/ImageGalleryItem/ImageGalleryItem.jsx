// Опис компонента <ImageGalleryItem>
// Компонент елемента списку із зображенням. Створює DOM-елемент наступної структури.

// <li class="gallery-item">
//   <img src="" alt="" />
// </li>
import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, showModal }) => {
  const { webformatURL, largeImageURL } = image;

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt=""
        onClick={() => showModal(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
