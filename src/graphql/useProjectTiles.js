import { graphql, useStaticQuery } from 'gatsby';
export const useProjectTiles = () => {
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

	return tiles.map((tile) => {
		const {
			id,
			fluid: { src },
		} = nodes.find(
			(background) =>
				background?.fluid?.originalName.split('_')[0] === tile?.pathname
		);
		return {
			...tile,
			id,
			src,
		};
	});
};
