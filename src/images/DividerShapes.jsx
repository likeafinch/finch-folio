import { ParallaxLayer } from '@react-spring/parallax';
import tw, { styled, css } from 'twin.macro';

const Rhombus = tw(ParallaxLayer)`
  
`;

const Triangle = tw(ParallaxLayer)`
  bg-gradient-to-r
  from-blue-300/70
  to-indigo-400/30
  min-h-screen
  absolute
  w-full
  h-full
  opacity-50
  [clip-path:polygon(0 37%, 75% 48%, 100% 10%, 100% 10%)]
  `;
