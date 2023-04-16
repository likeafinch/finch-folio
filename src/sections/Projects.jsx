import { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

import { Link } from 'gatsby';

import {
  Inner,
  Content,
  Title,
  LinkText,
  UpperDivider,
  LowerDivider,
} from '../styles';

import { useProjectTiles } from '../graphql';

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
