import s from './Button.module.css';

export default function Button({ setPages }) {
  return (
    <button
      onClick={() => setPages(prevState => prevState + 1)}
      className={s.Button}
    >
      Load more
    </button>
  )
}