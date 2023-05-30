import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '36213838-e372b0534fd2b886e594c2bd9';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        const newImages = response.data.hits.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
        }));

        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [query, currentPage]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMoreImages = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={loadMoreImages} />}
      {selectedImage && (
        <Modal
          imageUrl={selectedImage.largeImageURL}
          onClose={closeModal}
          isOpen={selectedImage !== null}
        />
      )}
    </div>
  );
};

export default App;
