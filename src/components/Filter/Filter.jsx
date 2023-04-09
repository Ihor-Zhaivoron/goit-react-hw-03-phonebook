import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ onFilter }) {
  return (
    <>
      <p>Find contacts by names</p>
      <input className={css.inputField} type="text" onChange={onFilter} />
    </>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};
