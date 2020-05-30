import React from 'react'
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const SearchBar = ({validateQGame}) => {
  const CssTextField = withStyles({
    root: {
      '& label': {
        color: '#ffffff',
      },
      '& label.Mui-focused': {
        color: '#ffffff',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ffffff',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ffffff',
        },
        '& input': {
          color: '#ffffff',
        },
        '&:hover fieldset': {
          borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffffff',
        },
      },
    },
  })(TextField);

  return ( 
    <CssTextField
      type="text"
      id="q_game"
      label="Search for a game"
      margin="normal"
      variant="outlined"
      style={{width: '100%'}}
      onKeyPress={ e => validateQGame(e) }
    />
  );
}
 
export default SearchBar;