import { TailSpin } from 'react-loader-spinner';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';
import { Component } from "react";

const KEY = '29734383-6ec437d7a0c5df52cef54a0f9';

class ImageGallery extends Component {
  state = {
    collection: [],
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const { images, pages } = this.props;

    if (prevProps.images !== images ||
      prevProps.pages !== pages) {
      this.setState({ isLoading: true });
      fetch(`https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(images => this.setState({
           collection: [...prevState.collection, ...images.hits]
        }))
        .finally(() => this.setState({ isLoading: false }))
    }
  }

  render() {
    const { collection } = this.state;
    return (
      <ul className={s.ImageGallery}>
        {collection.length > 0 &&
          collection.map(({ id, webformatURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
              />
            )
          })
        }
        {this.state.isLoading && <TailSpin />}
      </ul>
    )
  }
}

export default ImageGallery;