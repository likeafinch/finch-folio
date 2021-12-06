import loadableBase from '@loadable/component';
import { Loading } from '../components';

const loadable = (func) => loadableBase(func, { fallback: <Loading /> });

export default loadable;
