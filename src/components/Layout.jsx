import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import '@fontsource/source-sans-pro';

const GlobalStyle = css`
  * {
    font-family: 'Source Sans Pro';
    box-sizing: border-box;
    outline: none;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button,
    &::-webkit-scrollbar,
    *::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

function Layout(props) {
  const { children } = props;
  return (
    <>
      <BaseStyles />
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
