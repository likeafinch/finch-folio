import { Content, FooterContent, Inner, Title } from '../../styles';
import { Fragment } from 'react';
import { default as WaveDivider } from './WaveDivider';
import { default as ContactForm } from './ContactForm';
import { default as Footer } from './Footer';

const Contact = () => {
  return (
    <Fragment>
      <Content
        tw={'flex-col justify-start items-start w-full 2xl:items-center'}
        factor={1}
        offset={3.25}
      >
        <Inner>
          <Title>Get In Touch</Title>
          <ContactForm />
        </Inner>
      </Content>
      <FooterContent offset={3.5}>
        <Footer />
      </FooterContent>
      <WaveDivider />
    </Fragment>
  );
};

export default Contact;
