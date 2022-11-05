import { ParallaxLayer } from '@react-spring/parallax';
import tw, { css } from 'twin.macro';

const HeroParallax = tw(ParallaxLayer)`
  mix-blend-exclusion
  px-4
  md:px-12
  xl:px-16
  pt-[25%]
  w-full
  uppercase
  flex
  flex-col
  items-center
  after:(
    top-0
    -z-1
    bg-hero
    absolute
    h-fill
    w-fill
    content-[' ']
  )
`;

export const HeroTitle = tw.h1`
  text-3xl
  lg:text-4xl
  font-thin
  h-8
  flex
  items-center
  uppercase
  justify-start
  text-rose-200/70
  mb-12
  drop-shadow-sm
  mr-auto
  `;

const HeroAltTitle = tw.i`
  text-tertiary
  h-full
  text-base
  inline-flex
  items-start
  pl-2
`;

const HeroSubtitle = tw.h3`
  text-xl
  lg:text-2xl
  text-tertiary
  mt-6
  xxl:w-3/4
  tracking-paragraph
  uppercase
  font-light
`;

const HeroEmphasis = tw.em`
  text-xs
  lg:text-sm
  tracking-paragraph
  uppercase
  font-thin
  text-rose-200
  mt-8
  flex
`;

const Hero = () => (
  <HeroParallax
    offset={0}
    speed={0.5}
    css={css({
      '&:after': {
        clipPath: 'polygon(0 0%,100% 0%,100% 100%,0 15%)',
      },
    })}
  >
    <HeroTitle>
      Design.
      <HeroAltTitle>not aga!n</HeroAltTitle>
    </HeroTitle>
    <HeroSubtitle>
      I&apos;m Atticus, and if one more person asks me to make a wordpress site,
      or use jquery, I&apos;m gonna lose it. Seriously... The 90s called and
      they want their shitty CMS and JavaScript library back.
      <br />
      <HeroEmphasis>&copy; Like A Finch Development </HeroEmphasis>
    </HeroSubtitle>
  </HeroParallax>
);

export default Hero;
