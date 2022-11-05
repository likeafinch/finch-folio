import tw, { styled } from 'twin.macro';
import { ParallaxLayer } from '@react-spring/parallax';

export const Content = styled(ParallaxLayer)`
  ${tw`relative px-4 md:px-12 xl:px-16 justify-center w-full items-center flex z-50`};
  &.hero {
    mix-blend-mode: ${(props) => props.mixBlend || 'exclusion'};
    filter: ${(props) => props.filter};
  }
  &.footer {
    z-index: 30;
  }
  &.contact-section {
    ${tw`flex-col justify-start items-start w-full xxl:items-center`}
  }
`;

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full min-h-screen`};
  background: ${(props) => props.bg};
  animation-iteration-count: 1;
  animation-fill-mode: none;
  top: 0;
  svg {
    fill: ${(props) => props.fill};
  }
  clip-path: ${(props) => props.clipPath};
  &.wave {
    svg#wave {
      mask-image: linear-gradient(
        to right,
        rgba(162, 181, 216, 0.9) 0%,
        rgba(148, 130, 186, 0.3) 100%
      );
    }
  }
`;

export const WaveDivider = () => (
  <Divider
    className={'wave'}
    factor={1.5}
    offset={5.5}
    fill={'rgba(50, 50, 65, .9)'}
  ></Divider>
);

export const UpperDivider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full min-h-screen`};
  animation-iteration-count: 1;
  animation-fill-mode: none;
  background: linear-gradient(
    to right,
    rgba(162, 181, 216, 0.7) 0%,
    rgba(148, 130, 186, 0.3) 100%
  );
  top: 0;
  svg {
    fill: ${(props) => props.fill};
  }
  clip-path: polygon(0 0%, 100% 11%, 100% 78%, 0% 100%);
`;

UpperDivider.defaultProps = {
  factor: 1.7,
  speed: 0.3,
  offset: 1,
};

export const LowerDivider = styled(ParallaxLayer)`
  opacity: 0.5;
  ${tw`absolute w-full h-full min-h-screen`};
  animation-iteration-count: 1;
  animation-fill-mode: none;
  background: linear-gradient(
    to right,
    rgba(162, 181, 216, 0.7) 0%,
    rgba(148, 130, 186, 0.3) 100%
  );
  top: 0;
  svg {
    fill: ${(props) => props.fill};
  }
  clip-path: polygon(0 37%, 75% 48%, 100% 10%, 100% 10%);
`;

LowerDivider.defaultProps = {
  factor: 1.5,
  speed: -0.5,
  offset: 4.2,
};
