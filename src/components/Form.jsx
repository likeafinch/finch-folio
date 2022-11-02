import { Fragment } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { default as Button, Actions } from './Button';
import { MultiInputs, TextField } from './TextField';
import { useContactForm } from '../graphql';

const ContactText = tw.h2`
  relative
  text-tertiary
  border-b
  border-main
  w-max
  mb-16
  pb-2
  text-2xl
  tracking-title
  mr-auto
  uppercase`;

const FormActions = (props) => {
  const { submitted, clicks, handleClick, handleSubmit, handleReset } = props;
  const buttonText =
    submitted &&
    (clicks === 0
      ? 'Send Another Message?'
      : clicks === 1
      ? 'Oh Really One Message Isnt Enough?'
      : 'Seriously? Wow You Are Selfish');
  if (!submitted) {
    return (
      <Actions>
        <Button onClick={handleSubmit} label={'Send It'} />
        <Button onClick={handleReset} label={'whoopsies!'} secondary />
      </Actions>
    );
  }

  return (
    <Actions submitted>
      <Button onClick={handleClick} label={buttonText} />
    </Actions>
  );
};

FormActions.propTypes = {
  clicks: PropTypes.number,
  submitted: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
  handleClick: PropTypes.func,
};

FormActions.defaultProps = {
  submitted: false,
  clicks: 0,
};

export const StyledForm = styled.form(({ submitted }) => [
  tw`
      shadow-lg
      my-8
      p-8
      xl:p-12
      2xl:p-24
      relative
      w-full
      opacity-75
      bg-slate-700
      rounded-lg
      text-tertiary
      flex-col
      items-stretch
      transition-all
      duration-700
    `,
  submitted &&
    tw`
    py-12
  `,
]);

const Fields = (props) => {
  const { submitted, errors, name, email, message, handleFields } = props;

  if (submitted) {
    return null;
  }

  return (
    <Fragment>
      <MultiInputs>
        <TextField
          error={errors['name']}
          name={'name'}
          defaultValue={name}
          label={'Name'}
          required
          placeholder={'Noob Noop'}
          {...handleFields}
        />
        <TextField
          name={'email'}
          defaultValue={email}
          label={'Email'}
          type={'email'}
          error={errors['email']}
          required
          fieldWidth={'100%'}
          placeholder={'noop.noob@vindicators.com'}
          fieldMarginLeft={'2rem'}
          {...handleFields}
        />
      </MultiInputs>
      <TextField
        multiline
        name={'message'}
        defaultValue={message}
        label={'Message'}
        placeholder={'GOYYYYT DAYUMMMM'}
        {...handleFields}
      />
    </Fragment>
  );
};

Fields.propTypes = {
  email: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    message: PropTypes.bool,
  }),
  handleFields: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleFocus: PropTypes.func,
  }),
  submitted: PropTypes.bool,
};

const Form = () => {
  const {
    submitted,
    clicks,
    handleReset,
    handleSubmit,
    handleClick,
    ...fieldsProps
  } = useContactForm();
  return (
    <StyledForm submitted={submitted}>
      <ContactText>
        Contact <a href="mailto:emery.atticus@gmail.com"> Me </a>
      </ContactText>
      <Fields {...fieldsProps} submitted={submitted} />
      <FormActions
        submitted={submitted}
        clicks={clicks}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
    </StyledForm>
  );
};

export default Form;
