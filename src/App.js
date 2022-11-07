import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';


class App extends Component {
  state = {
    images: null,
    pages: 1,
  }

  onButtonClick = (clicks) => {
    this.setState({ pages: clicks })
    console.log(this.state.pages);
  }

  onFormSubmit = (request) => {
    this.setState({images: request})
  }

  render() {
    const { images, pages } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery images={images} pages={pages} />
        {images && <Button onClick={this.onButtonClick} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
