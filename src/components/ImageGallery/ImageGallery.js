import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import s from './ImageGallery.module.css';
import { Component } from "react";

class ImageGallery extends Component {
  state = {
    collection: null,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      fetch(`https://pixabay.com/api/?q=${this.props.images}&page=1&key=29734383-6ec437d7a0c5df52cef54a0f9&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(images => this.setState({ collection: images.hits }))
    }
  }

  render() {
    const { collection } = this.state;
    return (
      <ul className={s.ImageGallery}>
        {collection &&
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
      </ul>
    )
  }
}

export default ImageGallery