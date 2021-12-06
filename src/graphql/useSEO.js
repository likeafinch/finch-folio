import { graphql, useStaticQuery } from 'gatsby';

export const useSEO = () => {
	const {
		site: {
			siteMetadata: { schemaOrgWebPage, breadcrumb },
		},
	} = useStaticQuery(
		graphql`
			query MetaDataQuery {
				__typename
				site {
					siteMetadata {
						breadcrumb {
							description
							name
							_context
							_type
						}
						schemaOrgWebPage {
							author {
								name
								_type
							}
							copyrightHolder {
								name
								_type
							}
							copyrightYear(fromNow: true)
							creator {
								name
								_type
							}
							description
							headline
							image {
								url
								_type
							}
							inLanguage
							mainEntityOfPage
							name
							title
							tileColor
							url
							publisher {
								name
								_type
							}
							_context
							_type
							ogs {
								language
								siteName
							}
						}
					}
				}
			}
		`
	);
	const {
		tileColor,
		inLanguage,
		title,
		description,
		image,
		url,
		ogs: { language, siteName },
	} = schemaOrgWebPage;
	return {
		webPageSchema: JSON.stringify(schemaOrgWebPage),
		breadcrumbString: JSON.stringify(breadcrumb),
		imageUrl: image.url,
		tileColor,
		inLanguage,
		url,
		title,
		description,
		language,
		siteName,
	};
};
