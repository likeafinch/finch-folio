import tw, { styled } from 'twin.macro';
import { rotateAnimation } from './Animations';
import triangle from '../images/triangle.svg';

export const Title = styled.h1`
  ${tw`text-3xl uppercase lg:text-4xl font-thin text-tertiary mt-4 mb-6 relative inline-flex items-center justify-end pl-16 tracking-paragraph`};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  min-width: max-content;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -5px;
    top: 0;
  }
`;

export const Text = styled.div`
  ${tw`opacity-90 text-tertiary text-sm md:text-lg tracking-paragraph uppercase`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-weight: 200;
`;

export const Subtitle = styled.p`
  ${tw`text-xl lg:text-2xl text-tertiary mt-6 xxl:w-3/4 tracking-paragraph uppercase`};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  em {
    ${tw`text-xs lg:text-sm tracking-paragraph uppercase font-thin text-primary mt-8 flex`}
  }
`;

export const Footer = styled.footer`
  ${tw`text-center text-primary absolute bottom-0 p-6 text-sm lg:text-base tracking-paragraph uppercase font-thin`};
`;

export const LinkText = styled.div`
  ${tw`opacity-90 text-tertiary text-sm md:text-base tracking-paragraph uppercase`};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;
