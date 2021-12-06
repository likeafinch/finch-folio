import tw, { styled, css } from 'twin.macro';
import { keyframes } from '@emotion/react';

export const hidden = css`
	${tw`hidden xl:block`};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const negRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const rotateAnimation = (length) => css`
	animation: ${rotate} ${length} linear infinite;
`;
export const negativeRotateAnimation = (length) => css`
	animation: ${negRotate} ${length} linear infinite;
`;

const fadeBackground = keyframes`
	from {
		opacity: .5;
	}
	to {
		opacity: 1;
	}
`;

export const loading = css`
	animation: ${fadeBackground} 1s ease alternate 1 forwards;
`;

export const fade = css`
	${fadeBackground} 2s ease-in;
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  25% {
    d: path("M 0 175 Q 200 150 400 200 Q 600 250 800 275 L 800 0 L 0 0 L 0 100 Z");
  }
  75% {
    d: path("M 0 275 Q 150 350 400 200 Q 650 50 800 175 L 800 0 L 0 0 L 0 100 Z");
  }
	100% {
    d: path("M 0 300 Q 150 350 400 200 Q 650 50 800 100 L 800 0 L 0 0 L 0 100 Z");
  }
`;

export const waveAnimation = (duration) => css`
	animation: ${duration} linear 2s infinite alternate ${wave};
`;

const WaveWrapper = styled.div`
	${tw`absolute bottom-0 w-full`};
	transform: matrix(1, 0, 0, -1, 0, 0);
`;
const InnerWave = styled.div`
	${tw`relative h-full`};
	svg {
		width: 100%;
		height: 40vh;
	}
	path {
		${waveAnimation('10s')};
	}
`;

export const Wave = () => (
	<WaveWrapper>
		<InnerWave>
			<svg
				id={'wave'}
				xmlns={'http://www.w3.org/2000/svg'}
				viewBox={'0 0 800 338.05'}
				preserveAspectRatio={'none'}
			>
				<path>
					<animate
						attributeName={'d'}
						values={
							'M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
						}
						repeatCount={'indefinite'}
						dur={'10s'}
					/>
				</path>
			</svg>
		</InnerWave>
	</WaveWrapper>
);
