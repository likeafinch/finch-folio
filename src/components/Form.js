import { Fragment } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { default as Button, Actions } from './Button';
import Input, { MultiInputs } from './Input';
import Textarea from './Textarea';
import { useContactForm } from '../graphql';

const ContactText = tw.h2`relative text-tertiary border-b border-main w-max mb-16 pb-2 text-2xl tracking-title mr-auto uppercase`;

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

export const StyledForm = styled.form`
	${tw`shadow-lg my-8 p-8 xl:p-12 2xl:p-24 relative w-full opacity-75 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch`}
	transition: background 20ms ease-in-out;
	padding-bottom: ${(props) => props.submitted && '3rem'};
	padding-top: ${(props) => props.submitted && '3rem'};
`;

const Fields = (props) => {
	const { submitted, errors, name, email, message, handleFields } = props;

	if (submitted) {
		return null;
	}

	return (
		<Fragment>
			<MultiInputs>
				<Input
					error={errors['name']}
					name={'name'}
					defaultValue={name}
					label={'Name'}
					required
					{...handleFields}
				/>
				<Input
					name={'email'}
					defaultValue={email}
					label={'Email'}
					type={'email'}
					error={errors['email']}
					required
					inputWidth={'100%'}
					inputMarginLeft={2}
					email
					{...handleFields}
				/>
			</MultiInputs>
			<Textarea
				name={'message'}
				defaultValue={message}
				label={'Message'}
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
				Contact <a href='mailto:emery.atticus@gmail.com'> Me </a>
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
