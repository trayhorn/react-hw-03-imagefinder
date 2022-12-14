import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


const Searchbar = ({ setQueryOnSubmit, setPages }) => {

  const handleSubmit = ({ request }, { resetForm }) => {
    if (request.trim() === '') {
      toast.error('You need to type something.')
      return
    }

    setQueryOnSubmit(request);
    setPages(1);
    resetForm();
  }

  return (
    <header className={s.Searchbar}>
      <Formik
        initialValues={{ request: '' }}
        onSubmit={handleSubmit}
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

export default Searchbar;