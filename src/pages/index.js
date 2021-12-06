/* eslint-disable filenames/match-regex */

import { Parallax } from '@react-spring/parallax';
import { Hero, Projects, About, Contact } from '../sections';

const IndexPage = () => {
	return (
		<Parallax pages={7}>
			<Hero />
			<Projects />
			<About />
			<Contact />
		</Parallax>
	);
};

export default IndexPage;
