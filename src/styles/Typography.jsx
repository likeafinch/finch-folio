import tw, { styled, css } from 'twin.macro';
import triangle from '../images/triangle.svg';

export const Title = styled.h1(() => [
  tw`
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
    pl-14
    tracking-wider
    min-w-max
    before:(
      w-10
      h-10
      absolute
      bg-triangle-size
      bg-no-repeat
      content-[' ']
      animate-rotate
      -left-1
      top-0
    )
    `,
  css`
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    &:before {
      background-image: url(${triangle});
    }
  `,
]);

export const Text = tw.div`
    opacity-90
    text-rose-50
    text-sm
    md:text-lg
    tracking-wider
    uppercase
    font-extralight
    `;

export const Subtitle = styled.p`
  ${tw`
    text-xl
    lg:text-2xl
    text-indigo-200
    mt-6
    2xl:w-3/4
    tracking-wider
    uppercase`};
  em {
    ${tw`
      text-xs
      lg:text-sm
      tracking-wider
      uppercase
      font-thin
      text-teal-50
      mt-8
      flex
      `}
  }
`;

export const LinkText = tw.div`
  opacity-90
  text-slate-200
  text-sm
  md:text-base
  tracking-wider
  uppercase`;
