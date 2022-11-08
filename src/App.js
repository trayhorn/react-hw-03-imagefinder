import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';


class App extends Component {
  state = {
    images: null,
    pages: 1,
    isModalOpen: false,
    largeImageUrl: ''
  }

  getLargeImageUrl = url => {
    this.setState({ largeImageUrl: url });
  }

  openModalOnClick = (event) => {
    if (event.target.localName === 'img') {
      Loading.circle()
      this.toggleModal();
      Loading.remove()
    }
  }

  onButtonClick = (clicks) => {
    this.setState({ pages: clicks })
  }

  onFormSubmit = (request) => {
    this.setState({images: request})
  }

  toggleModal = () => {
    this.setState(({isModalOpen}) => ({
      isModalOpen: !isModalOpen
    }))
  }

  render() {
    const { images, pages, largeImageUrl } = this.state;
    return (
      <div className="App">
        {this.state.isModalOpen &&
          <Modal
            onCloseButton={this.toggleModal}
            largeImageUrl={largeImageUrl}
          />}
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery
          getLargeImageUrl={this.getLargeImageUrl}
          onClick={this.openModalOnClick}
          onCloseButton={this.toggleModal}
          images={images}
          pages={pages}
        />
        {images && <Button onClick={this.onButtonClick} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
