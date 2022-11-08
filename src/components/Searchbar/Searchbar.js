import s from './Searchbar.module.css';
import { Component } from 'react';
import { toast } from 'react-toastify';


class Searchbar extends Component {
  state = {
    request: ''
  }


  handleChange = e => {
    this.setState({request: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      toast.error('You need to type something.')
      return
    }
    this.props.onSubmit(this.state.request.toLowerCase());
    this.setState({request: ''})
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.formButton}>
            <span className={s.formButtonLabel}>Search</span>
          </button>

          <input
            className={s.formInput}
            type="text"
            autoComplete='off'
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar;