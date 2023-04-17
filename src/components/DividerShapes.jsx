import PropTypes from 'prop-types';
import { ParallaxLayer } from '@react-spring/parallax';
import tw, { styled } from 'twin.macro';

function shapeOption(shape) {
  let shapeStyles;
  switch (shape) {
    case 'triangle':
      shapeStyles = tw`
        bg-gradient-to-r
        from-pink-400/90
        to-fuchsia-300/80
        [clip-path:polygon(0 0%, 100% 11%, 100% 78%, 0% 100%)]
        `;
      break;
    case 'ellipse':
      shapeStyles = tw`
        bg-gradient-to-bl
        from-sky-600
        to-fuchsia-900
        [clip-path:ellipse(27% 40% at 73% 59%)]
        `;
      break;
    case 'rhombus':
      shapeStyles = tw`
        bg-gradient-to-r
        from-rose-800/90
        to-indigo-400/60
        [clip-path:polygon(-40% 27%, -18% 100%, 131% 85%, 73% 0%)]
        `;
      break;
    default:
      shapeStyles = tw`
        bg-gradient-to-r
        from-indigo-600/80
        to-cyan-600/50
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
    opacity-40
`,
  shapeOption(shape),
]);

export function Wave(props) {
  return (
    <ParallaxLayer tw="w-full h-full min-h-screen" {...props}>
      <div tw="absolute bottom-0 w-full">
        <div tw="relative h-full">
          <svg
            id={'wave'}
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 0 800 338.05'}
            preserveAspectRatio={'none'}
            tw="fill-blue-800/70 w-full rotate-180 [height:40vh] [mask-image: linear-gradient(to right,rgba(21, 22, 22, 0.314) 0%, rgba(202, 208, 234, 0.897) 100%)]"
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
  offset: PropTypes.number,
  factor: PropTypes.number,
  speed: PropTypes.number,
  horizontal: PropTypes.bool,
};
