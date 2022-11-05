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
    <AboutDivider speed={-0.2} offset={3} />
    <Content className={'about'} speed={-0.1} factor={1.5} offset={3}>
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
              {
                'Well, I’m going to tell you the best and the worst thing you’ve ever heard. '
              }
              <AboutSubtitleAlt>{'Heroes aren’t born.'}</AboutSubtitleAlt>
            </AboutSubtitle>
          </AboutHeader>
          <AboutDescription>
            You just go out there and grind it out. You fail and you look
            foolish and you just keep grinding. There is nothing else. There is
            no ‘chosen one,’ there is no destiny, nobody wakes up one day and
            finds out they’re amazing at something. There’s just slamming your
            head into the wall, refusing to take no for an answer. Being
            relentless, until either the wall or your head breaks. You want to
            be a hero? You don’t have to make some grand decision. There’s no
            inspirational music, there’s no montage. You just don’t quit.
          </AboutDescription>
        </AboutWrapper>
      </Inner>
    </Content>
  </Fragment>
);

export default About;
