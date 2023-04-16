import PropTypes from 'prop-types';
import { ParallaxLayer } from '@react-spring/parallax';
import tw, { styled } from 'twin.macro';

function shapeOption(shape) {
  let shapeStyles;
  switch (shape) {
    case 'triangleOverflow':
      shapeStyles = tw`
        bg-gradient-to-r
        from-pink-400/90
        to-fuchsia-300/80
        [clip-path:polygon(0 0%, 100% 11%, 100% 78%, 0% 100%)]
        `;
      break;
    case 'triangle':
      shapeStyles = tw`
        bg-gradient-to-r
        from-cyan-400/50
        to-sky-600/90
        [clip-path:polygon(0px 37%, 75% 48%, 100% 10%, 100% 10%)]
        `;
      break;
    case 'rhombus':
      shapeStyles = tw`
        bg-gradient-to-r
        from-blue-800/80
        to-indigo-400/30
        [clip-path:polygon(0 37%, 75% 48%, 100% 10%, 100% 10%)]
        `;
      break;
    default:
      shapeStyles = tw`
        bg-gradient-to-r
        from-indigo-600/80
        to-violet-300/70
        [clip-path:polygon(0px 0%, 100% 0%, 100% 100%, 0px 15%)]
        `;
  }
  return shapeStyles;
}

export const DividerShape = styled(ParallaxLayer)(({ shape }) => [
  tw`
    min-h-screen
    absolute
    w-full
    h-full
    opacity-50
`,
  shapeOption(shape),
]);

export function Wave(props) {
  const { parallaxLayerProps } = props;
  return (
    <ParallaxLayer tw="w-full h-full min-h-screen" {...parallaxLayerProps}>
      <div tw="absolute bottom-0 w-full">
        <div tw="relative h-full">
          <svg
            id={'wave'}
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 0 800 338.05'}
            preserveAspectRatio={'none'}
            tw="fill-slate-700/80 w-full rotate-180 [height:40vh] [mask-image: linear-gradient(to right,rgba(162, 181, 216, 0.9) 0%, rgba(148, 130, 186, 0.3) 100%)]"
          >
            <path tw="animate-wave">
              <animate
                attributeName={'d'}
                values={
                  'M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
                }
                repeatCount={'indefinite'}
                dur={'10s'}
              />
            </path>
          </svg>
        </div>
      </div>
    </ParallaxLayer>
  );
}

Wave.propTypes = {
  parallaxLayerProps: PropTypes.shape({
    offset: PropTypes.number,
    factor: PropTypes.number,
    speed: PropTypes.number,
    horizontal: PropTypes.bool,
  }),
};
