import PropTypes from 'prop-types';
import css from './ContactEl.module.css';

export function ContactEl({ contacts, handleDelete }) {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <span className={css.name}>{contact.name}: </span>
          {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
