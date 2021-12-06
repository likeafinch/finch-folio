import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const PrimaryButton = styled.button`
	${tw`relative flex items-center justify-center w-2/5 h-11 rounded shadow-none uppercase tracking-paragraph font-bold text-base text-tertiary bg-secondary mr-6 hover:text-black-link
  hover:cursor-pointer
  hover:bg-tertiary`}
	transition: background-color .2s ease-in-out,color .2s ease-in-out;
	${({ disabled }) =>
		disabled
			? `
    pointer-events: none;
    filter: grayscale(.2);
  `
			: ''}
`;

const SecondaryButton = styled.button`
	${tw`relative flex items-center justify-center w-2/5 h-11 border border-main rounded shadow-none uppercase tracking-paragraph font-bold text-base text-tertiary bg-transparent`}
	transition: background-color .2s ease-in-out,color .2s ease-in-out;
	&:hover {
		background-color: hsla(0, 0%, 100%, 0.075);
	}
	${({ disabled }) =>
		disabled
			? `
    pointer-events: none;
    filter: grayscale(.2);
  `
			: ''}
`;

export const Actions = tw.div`flex w-full items-center justify-between mt-24 pt-12`;

const Button = (props) => {
	const { label, secondary, ...extraProps } = props;
	if (secondary) {
		return <SecondaryButton {...extraProps}>{label}</SecondaryButton>;
	}
	return <PrimaryButton {...extraProps}>{label}</PrimaryButton>;
};

Button.propTypes = {
	secondary: PropTypes.bool,
	label: PropTypes.string.isRequired,
};

Button.defaultProps = {
	agreed: false,
	label: '',
};

export default Button;
