import { Parallax } from '@react-spring/parallax';
import { Hero, Projects, About, Contact } from '../sections';

const IndexPage = () => {
  return (
    <Parallax pages={4.5}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Parallax>
  );
};

export default IndexPage;
