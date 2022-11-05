import { ParallaxLayer } from '@react-spring/parallax';
import tw, { css } from 'twin.macro';

const AboutDividerStyles = tw(ParallaxLayer)`
    absolute
    w-full
    h-full
    min-h-screen
    opacity-50
    top-0
    animate-fade
    bg-about
    `;

const AboutDivider = () => (
  <AboutDividerStyles
    css={css({ clipPath: 'polygon(-40% 27%, -18% 100%, 131% 85%, 73% 0%)' })}
    speed={-0.2}
    offset={3}
  />
);

export default AboutDivider;
