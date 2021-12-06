import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { colors } from '../../tailwind.config.js';

const TextareaWrapper = styled.div`
	${tw`relative no-underline rounded text-tertiary flex-col flex justify-end mb-6`};
	width: ${({ inputWidth }) => inputWidth || '-webkit-fill-available'};
	margin-left: ${({ inputMarginLeft }) => inputMarginLeft || 0}rem;
	input:-internal-autofill-selected {
		background-color: transparent !important;
	}
	@media (max-width: 1199px) {
		width: -webkit-fill-available;
		margin-left: 0;
	}
`;

const TextareaLabel = styled.label`
	${tw`text-base mb-4 text-tertiary inline-flex uppercase tracking-paragraph`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.1);
	color: ${(props) => props.error && colors.pink};
	${({ required }) =>
		required &&
		`
	&:after {
		content: '*';
		position: relative;
		left: 0;
		padding-left: .2rem;
	}
	`}
`;

const InnerTextarea = styled.textarea`
	${tw`w-full tracking-paragraph opacity-90 bg-transparent text-tertiary uppercase text-base h-32 md:h-48 border p-3 outline-none rounded`}
	resize: none;
	transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
		background-color 0.2s ease-in-out;
	border-color: ${({ error }) => (error ? colors.pink : colors.tertiary)};
	border-width: ${({ error }) => (error ? 2 : 1)}px;
	&:focus {
		background: hsla(0, 0%, 100%, 0.075);
		box-shadow: 0 0 0 1px #fff;
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.tertiary)};
		opacity: 0.7;
	}
`;

const Textarea = forwardRef(function Textarea(props, inputRef) {
	const { label, required, error, name, ...textAreaProps } = props;
	return (
		<TextareaWrapper>
			<TextareaLabel htmlFor={name} required={required} error={error}>
				{label}
			</TextareaLabel>
			<InnerTextarea
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				{...textAreaProps}
			/>
		</TextareaWrapper>
	);
});

Textarea.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
	name: PropTypes.string,
};

export default Textarea;
