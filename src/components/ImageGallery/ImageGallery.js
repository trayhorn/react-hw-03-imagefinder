import { toast } from 'react-toastify';
import { Component, useState, useEffect } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';

const KEY = '29734383-6ec437d7a0c5df52cef54a0f9';


const ImageGallery = ({ setLargeImageUrl, onClick, images, pages }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const URL = `https://pixabay.com/api/?q=${images}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (!images) {
      return;
    }

    Loading.circle()
    fetch(URL)
      .then(r => r.json())
      .then(images => setCollection(images.hits))
      .finally(() => Loading.remove())
  }, [images])

  useEffect(() => {
    const URL = `https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (!images) {
      return;
    }

    Loading.circle()
    fetch(URL)
      .then(r => r.json())
      .then(images => setCollection(prevState =>
        [...prevState, ...images.hits]))
      .finally(() => Loading.remove())
  }, [images, pages])

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

// class ImageGallery extends Component {
//   state = {
//     collection: [],
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { images, pages } = this.props;
//     const URL = `https://pixabay.com/api/?q=${images}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`

//     if (prevProps.images !== images) {
//       Loading.circle()
//       fetch(URL)
//         .then(r => r.json())
//         .then(images => this.setState({
//           collection: images.hits,
//         }))
//         .finally(() => Loading.remove())
//       toast.success('Look what we have');
//     }
//     if (prevProps.pages !== pages) {
//       Loading.circle()
//       fetch(URL)
//         .then(r => r.json())
//         .then(images => this.setState({
//             collection: [...prevState.collection, ...images.hits]
//         }))
//         .finally(() => Loading.remove())
//     }
//   }

//   render() {
//     const { collection } = this.state;
//     const { onClick, setLargeImageUrl } = this.props;

//     return (
//       <ul onClick={onClick} className={s.ImageGallery}>
//         {collection.length > 0 &&
//           collection.map(({ id, webformatURL, largeImageURL }) => {
//             return (
//               <ImageGalleryItem
//                 setLargeImageUrl={setLargeImageUrl}
//                 key={id}
//                 id={id}
//                 webformatURL={webformatURL}
//                 largeImageURL={largeImageURL}
//               />
//             )
//           })
//         }
//       </ul>
//     )
//   }
// }

export default ImageGallery;


