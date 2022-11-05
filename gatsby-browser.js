/* eslint-disable react/prop-types */
import { Layout } from './src/components';
import { loadableReady } from '@loadable/component';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    function AppWithCallback() {
      useEffect(() => {
        callback();
      });
      return element;
    }
    const root = createRoot(container);
    loadableReady(() => {
      root.render(<AppWithCallback />);
    });
  };
};

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
