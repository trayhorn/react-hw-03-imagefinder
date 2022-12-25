import s from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ getLargeImageUrl, id, webformatURL, largeImageURL }) => {
  const handleImageClick = () => {
    getLargeImageUrl(largeImageURL);
  }

  return (
    <li className={s.item} onClick={handleImageClick}>
      <img className={s.itemImage}
        src={webformatURL}
        alt={id} />
    </li>
  )
}

export default ImageGalleryItem;