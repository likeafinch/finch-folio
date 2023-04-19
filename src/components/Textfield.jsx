import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const LabelStyles = tw.label`
    text-base
    mb-2
    text-tertiary
    inline-flex
    uppercase
    tracking-wider
    peer-required:(
      after:content-["\\002A"]
      after:relative
      after:left-0
      after:pl-[.2rem]
    )
    peer-focus:font-medium
    peer-hover:font-medium
    hover:font-medium
    focus:font-medium
  `;

function Label(props) {
  const { label, ...labelProps } = props;
  return <LabelStyles {...labelProps}>{label}</LabelStyles>;
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

Label.defaultProps = {
  label: '',
};

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

export const FieldStyles = tw`
    relative
    cursor-text
    transition-all
    duration-700
    opacity-90
    px-2
    py-3
    my-1
    w-full
    bg-slate-600/10
    shadow-input
    text-tertiary
    tracking-wider
    uppercase
    border-none
    rounded-t
    focus:(
        shadow-input-focused
        bg-slate-500/10
        )
    hover:(
        shadow-input-focused
        bg-slate-500/10
        )
    disabled:shadow-input-disabled
    disabled:text-slate-500
    placeholder:text-opacity-50
    `;

export const TextFieldStyles = styled.div(({ fieldWidth, fieldMarginLeft }) => [
  tw`
    relative
    no-underline
    text-tertiary
    flex
    flex-col-reverse
    justify-end
    mb-6
    w-fill
    md:w-full
    autofill:bg-transparent
    ml-0
  `,
  css`
    input:-internal-autofill-selected {
      background-color: transparent !important;
    }
  `,
  fieldWidth &&
    css`
      width: ${fieldWidth};
    `,
  fieldMarginLeft &&
    css`
      @media (min-width: 772px) {
        margin-left: ${fieldMarginLeft};
      }
    `,
]);

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

export const MultiInputs = styled.div`
  ${tw`
        flex
        flex-col
        md:flex-row
        w-full
        items-center
        justify-between
    `}
  ${TextFieldStyles}:nth-of-type(odd) {
    flex-basis: 60%;
  }
`;
function TextField(props) {
  const {
    multiline,
    fieldWidth,
    fieldMarginLeft,
    name,
    required,
    error,
    label,
    ...textFieldProps
  } = props;

  const Field = multiline ? Textarea : Input;

  return (
    <TextFieldStyles fieldMarginLeft={fieldMarginLeft} fieldWidth={fieldWidth}>
      <Field
        className={'peer'}
        id={name}
        name={name}
        error={error}
        required={required}
        {...textFieldProps}
      />
      <Label htmlFor={name} label={label} />
    </TextFieldStyles>
  );
}

TextField.propTypes = {
  error: PropTypes.bool,
  fieldMarginLeft: PropTypes.string,
  fieldWidth: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
};

TextField.defaultProps = {
  multiline: false,
  name: '',
  required: false,
  error: false,
  label: '',
};

export default TextField;
