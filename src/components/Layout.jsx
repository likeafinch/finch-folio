import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { default as SEO } from './SEO';
import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import '@fontsource/source-sans-pro';

const GlobalStyle = css`
  *,
  *:before,
  *:after {
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
  body {
    ${tw`
    bg-transparent
    overflow-hidden`}
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }
  html {
    ${tw`
      min-w-full
      max-w-screen
      p-0
      m-0
      bg-gradient-to-b
      from-[#14181d]
      to-[rgb(56, 65, 84)]`}
    height: -webkit-fill-available;
  }
  div#gatsby-focus-wrapper {
    ${tw`
      relative
      flex
      flex-col
      items-center
      justify-center
      w-fill
      px-2
      md:px-0
      h-screen
      animate-fade`}
  }
  a {
    ${tw`text-tertiary no-underline`}
  }
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <SEO />
      <BaseStyles />
      <Global styles={GlobalStyle} />
      {children}
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
