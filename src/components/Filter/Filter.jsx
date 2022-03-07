import { nanoid } from 'nanoid';
import { setString } from 'redux/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from '../ContactForm/ContactForm.styled';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const filterInputId = nanoid(7);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TextField
        sx={{ mt: 2, mb: 2 }}
        onChange={e => dispatch(setString(e.target.value))}
        variant="outlined"
        label="Filter"
        id={filterInputId}
        value={filterValue}
        type="text"
        name="filter"
      />
    </Wrapper>
  );
};

export default Filter;
