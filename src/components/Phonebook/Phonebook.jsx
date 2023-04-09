import { Component } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().integer().positive().required(),
});

export class Phonebook extends Component {
  onAddButnClick = (values, active) => {
    this.props.addContact(nanoid(), values.name, values.number);
    active.resetForm();
  };
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onAddButnClick}
        checkSchema={schema}
      >
        <Form className={css.form}>
          <p className="css.inputLabel">Name</p>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Jack Smith"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
          <p className={css.inputLabel}>Number</p>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="111-22-33"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="div"
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
