import { Fragment } from 'react';
import {
  AboutHeader,
  AboutWrapper,
  AboutAvatar,
  AboutSubtitle,
  AboutDescription,
  AboutSubtitleAlt,
} from './AboutShared';
import { default as AboutDivider } from './AboutDivider';
import avatar from '../../images/avatar.png';
import { Content, Inner, Title } from '../../styles';
import { css } from '@emotion/react';

const About = () => (
  <Fragment>
    <AboutDivider />
    <Content className={'about'} speed={0.8} offset={2}>
      <Inner>
        <Title>About</Title>
        <AboutWrapper
          css={css({
            backdropFilter: 'blur(200px)',
          })}
        >
          <AboutHeader>
            <AboutAvatar
              width={200}
              height={200}
              src={avatar}
              alt="Like A Finch"
            />
            <AboutSubtitle>
              {'I’m going to tell you the best and the worst thing'}
              <AboutSubtitleAlt>{'you’ve ever heard.'}</AboutSubtitleAlt>
            </AboutSubtitle>
          </AboutHeader>
          <AboutDescription>
            {`You just go out there and grind it out. You fail and you look foolish and you just keep grinding. There is nothing else. There is no ‘chosen one,' there is no destiny, nobody wakes up one day and finds out they’re amazing at something.
            There’s just slamming your head into the wall, refusing to take no for an answer.

            Being relentless, until either the wall or your head breaks.

            You want to be a good at something? You don’t have to make some grand decision. There’s no
            inspirational music, there’s no montage. You just don’t quit.`}
          </AboutDescription>
        </AboutWrapper>
      </Inner>
    </Content>
  </Fragment>
);

export default About;
