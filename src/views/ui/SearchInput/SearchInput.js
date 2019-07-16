import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ButtonBase from '@material-ui/core/ButtonBase';

const SearchInput = (props) => {
  const {
    classes,
    onClick,
    placeholder,
    initialValue,
  } = props;

  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  const onEnter = e => {
    if (e.key === 'Enter') {
      onClick(value);
    }
  };

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyPress={onEnter}
      />
      <ButtonBase className={classes.button} onClick={() => onClick(value)}>
        <SearchIcon
          classes={{
            root: classes.icon,
          }}
        />
      </ButtonBase>
    </div>
  );
};

SearchInput.defaultProps = {
  placeholder: '',
  initialValue: '',
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchInput;
