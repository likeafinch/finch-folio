import { Content, Inner, Title } from '../../styles';
import { Fragment } from 'react';
import { default as WaveDivider } from './WaveDivider';
import { default as ContactForm } from './ContactForm';
import { default as Footer } from './Footer';

const Contact = () => {
  return (
    <Fragment>
      <Content
        tw={'flex-col justify-start items-start w-full xxl:items-center'}
        factor={1}
        offset={4.7}
      >
        <Inner>
          <Title>Get In Touch</Title>
          <ContactForm />
        </Inner>
      </Content>
      <Content tw={'z-[30]'} offset={5}>
        <Footer />
      </Content>
      <WaveDivider />
    </Fragment>
  );
};

export default Contact;
