import loadable from './LoadableBase';

export { default as Contact } from './Contact';
export { default as About } from './About';
export { default as Hero } from './Hero';
export const Projects = loadable(() => import('./Projects'));
