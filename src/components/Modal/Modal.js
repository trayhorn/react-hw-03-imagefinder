import s from './Modal.module.css';

export default function Modal({ onCloseButton, largeImageUrl }) {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img
          src={largeImageUrl}
          alt="large version" />
        <button
          className={s.closeModalButton}
          onClick={onCloseButton}>
        </button>
      </div>
    </div>
  )
}