import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Layout from '../components/Layout';
import { DividerShape, Wave } from '../components/DividerShapes';
import tw from 'twin.macro';
import ProjectTiles from '../components/ProjectTiles';

export default function IndexPage() {
  return (
    <Layout>
      <Parallax pages={4}>
        <DividerShape offset={0} speed={1} />
        <Wave offset={3} speed={-0} />
        <DividerShape offset={0.75} speed={0.3} shape={'rhombus'} />
        <DividerShape offset={2.6} speed={0.1} shape={'triangle'} />
        <DividerShape
          css={tw`[filter:hue-rotate(230deg)]`}
          offset={1.3}
          speed={-0.3}
          shape={'triangle'}
        />
        <DividerShape offset={2} speed={-0.4} shape={'ellipse'} />
        <ParallaxLayer offset={1} factor={1.25} speed={0.8}>
          <ProjectTiles />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  );
}
