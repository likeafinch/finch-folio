import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { GlobalStyle } from '../styles';
import { Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import { default as SEO } from './SEO';

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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
