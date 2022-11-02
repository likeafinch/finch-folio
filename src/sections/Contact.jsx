import { Fragment } from 'react';

import { Form } from '../components';

import { Content, Inner, Title, WaveDivider, Footer } from '../styles';

const Contact = () => {
  return (
    <Fragment>
      <Content className={'contact'} factor={1} offset={5.7}>
        <Inner>
          <Title>Get In Touch</Title>
          <Form />
        </Inner>
      </Content>
      <Content className={'footer'} offset={6}>
        <Footer>
          &copy; 2021 by Like A Finch Development.{' '}
          <a href="https://github.com/likeafinch/finch-folio">
            Github Repository
          </a>
          . Made by{' '}
          <a href="https://github.com/likeafinch">Like A Finch Development</a>.
        </Footer>
      </Content>
      <WaveDivider />
    </Fragment>
  );
};

export default Contact;
