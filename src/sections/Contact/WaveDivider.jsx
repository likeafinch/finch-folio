import { ParallaxLayer } from '@react-spring/parallax';
import tw, { css } from 'twin.macro';

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
