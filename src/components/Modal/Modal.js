import s from './Modal.module.css';

export default function Modal({ onCloseButton }) {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src="" alt="" />
        <button onClick={onCloseButton}>
          Close modal
        </button>
      </div>
    </div>
  )
}