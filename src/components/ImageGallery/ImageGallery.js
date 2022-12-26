import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';

const KEY = '29734383-6ec437d7a0c5df52cef54a0f9';


const ImageGallery = ({ setLargeImageUrl, onClick, query, pages }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const URL = `https://pixabay.com/api/?q=${query}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (!query) {
      return;
    }

    Loading.circle()
    fetch(URL)
      .then(r => r.json())
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
    <ul onClick={onClick} className={s.ImageGallery}>
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


