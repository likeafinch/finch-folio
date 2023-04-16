import { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

import { Link } from 'gatsby';

import { UpperDivider, LowerDivider } from '../styles';
import triangle from '../images/triangle.svg';
import { useProjectTiles } from './useProjectTiles';

const Title = styled.h1(() => [
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
const LinkText = tw.div`
  opacity-90
  text-slate-200
  text-sm
  md:text-base
  tracking-wider
  uppercase`;
const ProjectsWrapper = tw.div`grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-stretch`;

const TitleWrapper = styled.div`
  ${tw`text-tertiary rounded-sm overflow-hidden relative uppercase text-xl md:text-2xl xl:text-3xl p-4`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  &:before {
    ${tw`absolute z-[-1] inset-0 h-full w-full`}
    content: ' ';
    filter: blur(1px);
  }
`;

const LinkWrapper = styled(Link)`
  ${tw`shadow-lg mx-0 my-1 md:m-2 min-h-[16rem] w-full  md:min-h-[15rem] relative no-underline rounded-lg text-white flex-col overflow-hidden flex justify-end`};
  animation-delay: 0.2s;
  flex-basis: calc(50% - 1rem);
  transition: transform 0.5s;
  transition-delay: ${(props) => (props.delay + 1) * 50}ms;
  filter: grayscale(30%);
  &:before {
    ${tw`bg-center bg-no-repeat bg-cover absolute z-[-1] h-full w-full inset-0`}
    content: ' ';
    background-image: url(${(props) => props.bg});
    filter: opacity(0.85) grayscale(70%);
  }
  &:hover {
    transform: translateY(-7px);
    &:before {
      filter: grayscale(30%);
    }
  }
`;

const ProjectTiles = () => {
  const tiles = useProjectTiles();
  return (
    <ProjectsWrapper>
      {tiles.map(({ id, src, title, subtitle }) => (
        <LinkWrapper key={id} to={'/'} bg={src}>
          <TitleWrapper>
            {title}
            <LinkText>{subtitle}</LinkText>
          </TitleWrapper>
        </LinkWrapper>
      ))}
    </ProjectsWrapper>
  );
};

const Projects = () => (
  <Fragment>
    <UpperDivider />
    <Content className={'projects'} speed={0.25} offset={1}>
      <Inner className={'projects'}>
        <Title>Projects</Title>
        <ProjectTiles />
      </Inner>
    </Content>
    <LowerDivider />
  </Fragment>
);

export default Projects;
