import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL }) {
  return (
    <li className={s.item}>
      <img className={s.itemImage}
        src={webformatURL}
        alt={id} />
    </li>
  )
}