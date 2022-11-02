import { Fragment } from 'react';

import { Content, Subtitle, Divider } from '../styles';
import tw, { styled } from 'twin.macro';

export const BigTitle = styled.h1`
  ${tw`text-3xl lg:text-4xl font-thin h-8 flex items-center uppercase justify-start text-rose-200/70 mb-12`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
  i {
    ${tw`text-tertiary h-full text-base inline-flex items-start pl-2`}
  }
`;

const WrapperDiv = tw.div`w-full xl:w-2/3 uppercase`;

const Hero = () => {
  return (
    <Fragment>
      <Content className={'hero'} offset={0}>
        <WrapperDiv>
          <BigTitle>
            Design. <i>not aga!n</i>
          </BigTitle>
          <Subtitle>
            I&apos;m Atticus, and if one more person asks me to make a wordpress
            site, or use jquery, I&apos;m gonna lose it. Seriously... The 90s
            called and they want their shitty CMS and JavaScript library back.
            <br /> <em>&copy; {'Like A Finch Development'} </em>
          </Subtitle>
        </WrapperDiv>
      </Content>
      <Divider
        bg={
          'linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)'
        }
        clipPath={'polygon(0 0%,100% 0%,100% 100%,0 15%)'}
        offset={0}
        speed={0.5}
      />
    </Fragment>
  );
};

export default Hero;
