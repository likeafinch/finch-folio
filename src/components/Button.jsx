import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const StyledButton = styled.button(({ secondary }) => [
  tw`
    relative
    px-6
    flex
    items-center
    justify-center
    tracking-wider
    transition
    duration-700
    shadow-none
    h-14
    uppercase
    bg-opacity-80
    hover:(
			cursor-pointer
			font-medium
			)
    disabled:(
      pointer-events-none
      opacity-60
    )
    `,

  secondary
    ? tw`
    hover:(
      text-slate-700
      bg-slate-300
		)
    bg-opacity-30
    text-slate-50
    bg-slate-600
    `
    : tw`
    text-slate-50
    bg-slate-800
    hover:(
			bg-slate-400
			text-slate-800
			)
      `,
]);

export const Button = ({ label, secondary, ...buttonProps }) => (
  <StyledButton
    secondary={secondary}
    data-testid={'button'}
    aria-label={label}
    {...buttonProps}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.any.isRequired,
  secondary: PropTypes.bool.isRequired,
};
Button.defaultProps = {
  label: 'Label',
  secondary: false,
};

export const Actions = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-2
  justify-items-stretch
  mt-auto
  pt-12`;

export default Button;
