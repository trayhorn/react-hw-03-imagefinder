import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import './App.css';


class App extends Component {
  state = {
    images: null,
  }

  onFormSubmit = (request) => {
    this.setState({images: request})
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery images={this.state.images} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
