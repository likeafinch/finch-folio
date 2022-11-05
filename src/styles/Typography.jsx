import tw, { styled } from 'twin.macro';

export const Title = tw.h1`
    text-3xl
    uppercase
    lg:text-4xl
    font-thin
    text-tertiary
    mt-4
    mb-6
    relative
    inline-flex
    items-center
    justify-end
    pl-16
    tracking-paragraph
    min-w-max
    before:(
      w-10
      h-10
      absolute
      bg-triangle-size
      bg-triangle
      animate-spin
      duration-[4s]
      left-[-5px]
      top-0
    )
    `;

export const Text = tw.div`
    opacity-90
    text-tertiary
    text-sm
    md:text-lg
    tracking-paragraph
    uppercase
    font-extralight
    `;

export const Subtitle = styled.p`
  ${tw`
    text-xl
    lg:text-2xl
    text-tertiary
    mt-6
    xxl:w-3/4
    tracking-paragraph
    uppercase`};
  em {
    ${tw`
      text-xs
      lg:text-sm
      tracking-paragraph
      uppercase
      font-thin
      text-primary
      mt-8
      flex
      `}
  }
`;

export const LinkText = tw.div`
  opacity-90
  text-tertiary
  text-sm
  md:text-base
  tracking-paragraph
  uppercase`;
