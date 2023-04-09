import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { ContactEl } from 'components/ContactEl/ContactEl';

export function ContactForm({ contacts, handleDelete, children }) {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={css.list}>
        <ContactEl contacts={contacts} handleDelete={handleDelete} />
      </ul>
    </div>
  );
}

ContactForm.propTypes = {
  children: PropTypes.node,
};
