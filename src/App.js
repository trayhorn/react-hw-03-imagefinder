import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import './App.css';

import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';


export default function App() {
  const [query, setQuery] = useState(null);
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
      <Searchbar
        setPages={setPages}
        setQueryOnSubmit={setQuery}
      />
      <ImageGallery
        setLargeImageUrl={setLargeImageUrl}
        onClick={openModalOnClick}
        query={query}
        pages={pages}
      />
      {query &&
        <Button setPages={setPages} />}
      <ToastContainer autoClose={3000} />
    </div>
  )
}
