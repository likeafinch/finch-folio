module.exports = {
  siteTitle: 'Like A Finch - Portfolio',
  siteDesc: 'Gatsby - Parallax - Twin.Macro - Emotion',
  siteAuthor: 'Atticus Emery<@likeafinch>',
  siteLogoUrl: 'static/favicons/android-chrome-192x192',

  manifestName: 'Like A Finch - Portfolio',
  manifestShortName: 'Like A Finch', // max 12 characters
  manifestStartUrl: 'https://likeafinch-folio.io/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'static/favicons/android-chrome-192x192.png',
  pathPrefix: '/',

  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/likeafinch',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:emery.atticus@gmail.com',
    },
  ],
  tiles: [
    {
      title: 'Angular',
      subtitle: '2+ None of that AngularJS Shit',
      pathname: 'angular',
    },
    {
      title: 'Firebase',
      subtitle: "For when you're smart enough to see backends are arcaine",
      pathname: 'firebase',
    },
    {
      title: 'GraphQL',
      subtitle: 'Teaching the world to heal from Redux',
      pathname: 'graphql',
    },
    {
      title: 'Gatsby',
      subtitle: 'React meets GraphQL - What could be better?',
      pathname: 'gatsbyjs',
    },
    {
      title: 'React',
      subtitle: 'A better library that jQuery',
      pathname: 'react',
    },
    {
      title: 'RxJS',
      subtitle: 'Observe it alllllll',
      pathname: 'rxjs',
    },
  ],
};
