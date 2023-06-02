import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import css from './App.module.css';
const API_KEY = '36213838-e372b0534fd2b886e594c2bd9';

class App extends Component {
  state = {
    query: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    showLoadMoreButton: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, currentPage } = this.state;

    this.setState({ isLoading: true });

    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (data.totalHits === 0) {
        throw new Error('No images matching your request were found.');
      }

      if (data.totalHits >= currentPage * 12) {
        this.setState({ showLoadMoreButton: true });
      }

      const newImages = data.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        isLoading: false,
      }));
    } catch (error) {
      alert('No images matching your request were found');
      this.setState({ isLoading: false });
    }
  };

  handleSearch = newQuery => {
    const { query } = this.state;

    if (query === newQuery) {
      return alert('Already shown');
    } else {
      this.setState({
        query: newQuery,
        images: [],
        currentPage: 1,
        isLoading: false,
        showLoadMoreButton: false,
        largeImageURL: '',
      });
    }
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  showModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { images, isLoading, showLoadMoreButton, largeImageURL } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} showModal={this.showModal} />
        {isLoading && <Loader />}
        {showLoadMoreButton && <Button onClick={this.loadMoreImages} />}
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} modalClose={this.showModal} />
        )}
      </div>
    );
  }
}

export default App;
