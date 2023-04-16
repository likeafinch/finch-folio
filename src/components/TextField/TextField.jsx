import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import Input from './Input';
import Textarea from './Textarea';
import Label from './Label';

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
