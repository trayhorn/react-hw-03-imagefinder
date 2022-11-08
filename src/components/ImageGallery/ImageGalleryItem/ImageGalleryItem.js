import s from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  handleImageClick = () => {
    const { getLargeImageUrl, largeImageURL } = this.props;
    getLargeImageUrl(largeImageURL);
  }

  render() {
    const { id, webformatURL } = this.props;
    return (
      <li className={s.item} onClick={this.handleImageClick}>
        <img className={s.itemImage}
          src={webformatURL}
          alt={id} />
      </li>
    )
  }
}

export default ImageGalleryItem;