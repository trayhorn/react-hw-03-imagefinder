import { Component } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';

const KEY = '29734383-6ec437d7a0c5df52cef54a0f9';

class ImageGallery extends Component {
  state = {
    collection: [],
  }

  componentDidUpdate(prevProps, prevState) {
    const { images, pages } = this.props;

    if (prevProps.images !== images) {
      Loading.circle()
      fetch(`https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(images => this.setState({
          collection: images.hits
        }))
        .finally(() => Loading.remove())
    }
    if (prevProps.pages !== pages) {
      Loading.circle()
      fetch(`https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(images => this.setState({
           collection: [...prevState.collection, ...images.hits]
        }))
        .finally(() => Loading.remove())
    }
  }

  render() {
    const { collection } = this.state;
    return (
      <ul onClick={this.props.onClick} className={s.ImageGallery}>
        {collection.length > 0 &&
          collection.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                getLargeImageUrl={this.props.getLargeImageUrl}
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            )
          })
        }
      </ul>
    )
  }
}

export default ImageGallery;

// componentDidUpdate(prevProps, prevState) {
//   const { images, pages } = this.props;

//   if (prevProps.images !== images ||
//     prevProps.pages !== pages) {
//     this.setState({ isLoading: true });
//     fetch(`https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//       .then(r => r.json())
//       .then(images => this.setState({
//           collection: [...prevState.collection, ...images.hits]
//       }))
//       .finally(() => this.setState({ isLoading: false }))
//   }
// }