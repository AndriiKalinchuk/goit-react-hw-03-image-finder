import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import css from './App.module.css';
const API_KEY = '36213838-e372b0534fd2b886e594c2bd9';

const STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

class App extends Component {
  state = {
    query: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    selectedImage: null,
    status: STATES.IDLE,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, currentPage, status } = this.state;

    if (query === '') return;

    if (status === STATES.LOADING) return;

    this.setState({ status: STATES.LOADING });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const newImages = response.data.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        status: STATES.LOADED,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ status: STATES.ERROR });
    }
  };

  handleSearch = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      currentPage: 1,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, status } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {status === STATES.LOADED && images.length > 0 && (
          <Button onClick={this.loadMoreImages} />
        )}
        {selectedImage && (
          <Modal
            imageUrl={selectedImage.largeImageURL}
            onClose={this.closeModal}
            isOpen={selectedImage !== null}
          />
        )}
      </div>
    );
  }
}

export default App;
