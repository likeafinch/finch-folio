import tw, { styled, css } from 'twin.macro';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { animated, useSprings } from 'react-spring';

const ProjectTile = styled(animated(Link))(() => [
  tw`
  min-h-[16rem]
  md:min-h-[20rem]
  no-underline
  rounded
  shadow-lg
  text-primary
  flex
  flex-col
  justify-end
  overflow-hidden
  transition-transform
  duration-500
  [filter:grayscale(30%)]
  before:(
    h-full
    w-full
    bg-center
    bg-no-repeat
    bg-cover
    absolute
    inset-0
    [content: ' ']
    [z-index: -1]
    [filter:opacity(0.85) grayscale(70%)]
  )
  hover:(
    translate-y-2
    before:grayscale-[30%]
  )
`,
  ({ backgroundImage }) =>
    backgroundImage &&
    css`
      &:before {
        background-image: url(${backgroundImage});
      }
    `,
]);

export default function ProjectTiles() {
  const {
    allImageSharp: { nodes },
    site: {
      siteMetadata: { tiles },
    },
  } = useStaticQuery(graphql`
    query GetProjectBackgrounds {
      allImageSharp(
        filter: { fluid: { originalName: { glob: "*_background.png" } } }
      ) {
        ...ImageSharpConnectionFragment
      }
      site {
        ...SiteFragment
      }
    }
    fragment SiteFragment on Site {
      siteMetadata {
        tiles {
          pathname
          subtitle
          title
        }
      }
    }
    fragment ImageSharpConnectionFragment on ImageSharpConnection {
      nodes {
        id
        fluid {
          src
          originalName
        }
      }
    }
  `);
  const trails = useSprings(tiles.length + 1, {
    from: {
      y: '10%',
    },
    to: {
      y: '0%',
    },
  });
  const Tiles = tiles.map(({ title, subtitle, pathname }, index) => {
    const {
      id,
      fluid: { src },
    } = nodes.find(
      (background) => background?.fluid?.originalName.split('_')[0] === pathname
    );
    return (
      <ProjectTile
        style={trails[index]}
        backgroundImage={src}
        to={'/'}
        key={id}
      >
        <div tw="text-tertiary rounded-sm overflow-hidden relative uppercase text-xl md:text-2xl xl:text-3xl p-4 before:(absolute z-[-1] inset-0 h-full w-full blur-sm [content:' '])">
          {title}
          <div tw="opacity-90 text-primary text-sm md:text-base tracking-wider uppercase">
            {subtitle}
          </div>
        </div>
      </ProjectTile>
    );
  });

  return (
    <section tw="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-stretch p-6">
      {Tiles}
    </section>
  );
}
