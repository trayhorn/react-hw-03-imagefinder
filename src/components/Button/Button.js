import s from './Button.module.css';

export default function Button({clickCounter}) {
  return (
    <button
      onClick={clickCounter}
      className={s.Button}
    >Load more</button>
  )
}