import loadable from '@loadable/component';
export { Title, Text, Subtitle, Footer, LinkText } from './Typography';
export { Inner } from './Global';

export const WaveDivider = loadable(() => import('./Dividers'), {
  resolveComponent: (components) => components.WaveDivider,
});
export const LowerDivider = loadable(() => import('./Dividers'), {
  resolveComponent: (components) => components.LowerDivider,
});
export const UpperDivider = loadable(() => import('./Dividers'), {
  resolveComponent: (components) => components.UpperDivider,
});
export const Divider = loadable(() => import('./Dividers'), {
  resolveComponent: (components) => components.Divider,
});
export const Content = loadable(() => import('./Dividers'), {
  resolveComponent: (components) => components.Content,
});
