/* eslint-disable react/prop-types */
import { Layout } from './src/components';
import { loadableReady } from '@loadable/component';
import ReactDOM from 'react-dom';

export const replaceHydrateFunction = () => {
	return (element, container, callback) => {
		loadableReady(() => {
			ReactDOM.render(element, container, callback);
		});
	};
};
export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
