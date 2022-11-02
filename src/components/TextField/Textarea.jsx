import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { FieldStyles } from './Share';

const TextareaStyles = styled.textarea(() => [
  FieldStyles,
  tw`
    resize-none
    h-32
    md:h-48
  `,
]);

const Textarea = forwardRef(function Textarea(
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
    <TextareaStyles
      ref={inputRef}
      onClick={handleFocus}
      invalid={error}
      disabled={disabled}
      {...inputProps}
    />
  );
});

Textarea.propTypes = {
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

Textarea.defaultProps = {
  disabled: false,
  error: false,
};

export default Textarea;
