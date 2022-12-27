import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';
import fetchImages from '../../services/API';


const ImageGallery = ({ setLargeImageUrl, onImageClick, query, pages }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    Loading.circle()
    fetchImages(query, pages)
      .then(images => {
        if (pages === 1) {
          setCollection(images.hits)
          toast.success('Look what we have');
        } else {
          setCollection(prevState =>
          [...prevState, ...images.hits])
        }
      })
      .finally(() => Loading.remove())
  }, [pages, query])

  return (
    <ul onClick={onImageClick} className={s.ImageGallery}>
      {collection.length > 0 &&
        collection.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              setLargeImageUrl={setLargeImageUrl}
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

export default ImageGallery;


