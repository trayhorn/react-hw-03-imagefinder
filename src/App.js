import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';


export default function App() {
  const [images, setImages] = useState(null);
  const [pages, setPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const openModalOnClick = event => {
    if (event.target.localName === 'img') {
      Loading.circle()
      setIsModalOpen(prevState => !prevState);
      Loading.remove();
    }
  }

  return (
    <div className="App">
      {isModalOpen &&
        <Modal
          onCloseButton={setIsModalOpen}
          largeImageUrl={largeImageUrl}
        />}
      <Searchbar setImagesOnSubmit={setImages} />
      <ImageGallery
        setLargeImageUrl={setLargeImageUrl}
        onClick={openModalOnClick}
        images={images}
        pages={pages}
      />
      {images && <Button setPages={setPages} />}
      <ToastContainer autoClose={3000} />
    </div>
  )
}
