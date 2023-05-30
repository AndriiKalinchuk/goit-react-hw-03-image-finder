// Опис компонента <ImageGalleryItem>
// Компонент елемента списку із зображенням. Створює DOM-елемент наступної структури.

// <li class="gallery-item">
//   <img src="" alt="" />
// </li>
import React from 'react';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const { webformatURL, largeImageURL } = image;

  const handleClick = () => {
    onImageClick(largeImageURL);
  };

  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;
