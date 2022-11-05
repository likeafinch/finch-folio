import PropTypes from 'prop-types';
import tw from 'twin.macro';

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
    peer-invalid:(
      text-rose-400
      font-medium
      peer-focus:text-tertiary
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

export default Label;
