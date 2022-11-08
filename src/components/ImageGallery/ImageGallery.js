import { toast } from 'react-toastify';
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
    const URL = `https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevProps.images !== images) {
      Loading.circle()
      fetch(URL)
        .then(r => r.json())
        .then(images => this.setState({
          collection: images.hits
        }))
        .finally(() => Loading.remove())
      toast.success('Look what we got');
    }
    if (prevProps.pages !== pages) {
      Loading.circle()
      fetch(URL)
        .then(r => r.json())
        .then(images => this.setState({
            collection: [...prevState.collection, ...images.hits]
        }))
        .finally(() => Loading.remove())
    }
  }

  render() {
    const { collection } = this.state;
    const { onClick, getLargeImageUrl } = this.props;

    return (
      <ul onClick={onClick} className={s.ImageGallery}>
        {collection.length > 0 &&
          collection.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                getLargeImageUrl={getLargeImageUrl}
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


