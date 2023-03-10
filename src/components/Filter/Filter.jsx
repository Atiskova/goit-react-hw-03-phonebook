import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilterChange} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
