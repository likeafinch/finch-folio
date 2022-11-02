import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { styled } from 'twin.macro';
import { FieldStyles } from './Share';

const InputStyles = styled.input(() => [FieldStyles]);

const Input = forwardRef(function Input(
  { error, disabled, ...inputProps },
  ref
) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <InputStyles
      ref={inputRef}
      onClick={handleFocus}
      invalid={error}
      disabled={disabled}
      {...inputProps}
    />
  );
});

Input.propTypes = {
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  disabled: false,
  error: false,
};

export default Input;
