import s from './Button.module.css';
import { Component } from 'react';

class Button extends Component {
  state = {
    clicks: 1,
  }

  pageCounter = () => {
    this.setState(({ clicks }) => {
      return {clicks: clicks + 1}
    })
    this.props.onClick(this.state.clicks + 1)
  }

  render() {
    return (
      <button
        onClick={this.pageCounter}
        className={s.Button}
      >Load more</button>
    )
  }
}

export default Button;