import s from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ setLargeImageUrl, id, webformatURL, largeImageURL }) => {
  return (
    <li
      className={s.item}
      onClick={() => setLargeImageUrl(largeImageURL)}>
      <img className={s.itemImage}
        src={webformatURL}
        alt={id} />
    </li>
  )
}

export default ImageGalleryItem;