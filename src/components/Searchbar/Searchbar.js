import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { Component } from 'react';
import s from './Searchbar.module.css';


class Searchbar extends Component {

  handleSubmit = ({request}, { resetForm }) => {
    if (request.trim() === '') {
      toast.error('You need to type something.')
      return
    }

    this.props.onSubmit(request);
    resetForm();
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <Formik
          initialValues={{ request: '' }}
          onSubmit={this.handleSubmit}
        >
          <Form className={s.SearchForm}>
            <button type="submit" className={s.formButton}>
              <span className={s.formButtonLabel}>Search</span>
            </button>

            <Field
              className={s.formInput}
              name="request"
              type="text"
              autoComplete='off'
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    )
  }
}

export default Searchbar;