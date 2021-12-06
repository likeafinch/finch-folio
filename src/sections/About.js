import tw, { styled } from 'twin.macro';
import { Fragment } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import avatar from '../images/avatar.png';
import { Content, Inner, Title, fade } from '../styles';

const AboutHeader = tw.div`flex text-primary text-xl md:text-2xl lg:text-3xl flex-row items-center m-6 tracking-paragraph`;

const AboutAvatar = tw.img`rounded-full w-32 xl:w-48 shadow-lg h-auto`;

const AboutSubTitle = tw.div`text-tertiary text-right uppercase justify-start items-stretch flex-wrap mb-auto flex px-4 lg:px-6 text-lg md:text-xl lg:text-2xl tracking-paragraph`;

const AboutDescription = tw.p`text-tertiary text-justify text-lg md:text-xl uppercase font-thin tracking-paragraph px-8 pb-8 pt-4`;

const AboutDivider = styled(ParallaxLayer)`
	opacity: 0.5;
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(30, 40, 50, 0.9) 0%,
		rgba(80, 100, 120, 0.7) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(-40% 27%, -18% 100%, 131% 85%, 73% 0%);
`;

const AboutWrapper = tw.div`shadow-lg my-8 p-8 relative w-full opacity-90 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch`;

const About = () => {
	return (
		<Fragment>
			<AboutDivider speed={-0.2} offset={3} />
			<Content className={'about'} speed={-0.1} factor={1.5} offset={3.5}>
				<Inner>
					<Title>About</Title>
					<AboutWrapper>
						<AboutHeader>
							<AboutAvatar
								width={200}
								height={200}
								src={avatar}
								alt='Like A Finch'
							/>
							<AboutSubTitle>
								Well, I’m going to tell you the best and the worst thing you’ve
								ever heard. Heroes aren’t born.
							</AboutSubTitle>
						</AboutHeader>
						<AboutDescription>
							You just go out there and grind it out. You fail and you look
							foolish and you just keep grinding. There is nothing else. There
							is no ‘chosen one,’ there is no destiny, nobody wakes up one day
							and finds out they’re amazing at something. There’s just slamming
							your head into the wall, refusing to take no for an answer. Being
							relentless, until either the wall or your head breaks. You want to
							be a hero? You don’t have to make some grand decision. There’s no
							inspirational music, there’s no montage. You just don’t quit.
						</AboutDescription>
					</AboutWrapper>
				</Inner>
			</Content>
		</Fragment>
	);
};

export default About;
