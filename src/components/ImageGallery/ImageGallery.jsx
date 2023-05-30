// Опис компонента <ImageGallery>
// Список карток зображень. Створює DOM-елемент наступної структури.

// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          openModal={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
