import { ParallaxLayer } from '@react-spring/parallax';
import tw, { css, styled } from 'twin.macro';

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
    ${tw`flex-col justify-start items-start w-full 2xl:items-center`}
  }
`;

export const FooterContent = styled(Content)`
  ${tw`z-[-1]`}
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
    offset={3.5}
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
  offset: 3.2,
};

const WaveParallaxLayer = tw(ParallaxLayer)`
  w-full
  h-full
  min-h-screen
`;

const WaveWrapper = tw.div`
  absolute
  bottom-0
  w-full
  `;
const InnerWave = tw.div`
  relative
  h-full
  `;

const WaveSVG = tw.svg`
  fill-[rgba(50, 50, 65, .9)]
  w-full
  h-[40vh]
  rotate-180
`;

const WavePath = tw.path`animate-wave`;

const WaveDivider = () => (
  <WaveParallaxLayer offset={3.5}>
    <WaveWrapper>
      <InnerWave>
        <WaveSVG
          id={'wave'}
          xmlns={'http://www.w3.org/2000/svg'}
          viewBox={'0 0 800 338.05'}
          preserveAspectRatio={'none'}
          css={css({
            maskImage:
              'linear-gradient(to right,rgba(162, 181, 216, 0.9) 0%, rgba(148, 130, 186, 0.3) 100%)',
          })}
        >
          <WavePath>
            <animate
              attributeName={'d'}
              values={
                'M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
              }
              repeatCount={'indefinite'}
              dur={'10s'}
            />
          </WavePath>
        </WaveSVG>
      </InnerWave>
    </WaveWrapper>
  </WaveParallaxLayer>
);

export default WaveDivider;
