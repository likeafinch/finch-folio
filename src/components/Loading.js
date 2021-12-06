import tw, { styled } from 'twin.macro';
import { loading, negativeRotateAnimation, rotateAnimation } from '../styles';

const LoadingCircle = styled.div`
	${tw`absolute shadow-lg rounded-full`}
	height: ${(props) => props.diameter}rem;
	width: ${(props) => props.diameter}rem;
	background-color: rgba(${(props) => props.bg});
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	z-index: ${(props) => props.zindex};
	transform-origin: ${(props) => props.transform}px
		${(props) => props.transform}px;
	${rotateAnimation('1s')}
`;

const LoadingInner = styled.div`
	${tw`absolute shadow-lg h-full w-full rounded-full`}
	background-color: rgba(120, 140, 152, 0.8);
	width: 18rem;
	height: 18rem;
	backface-visibility: hidden;
	transform-origin: 80px 100px;
	${negativeRotateAnimation('3s')}
`;

const LoadingSpinner = styled.div`
	${tw`absolute inset-0 z-1000 flex justify-center items-center`}
	${loading}
	overflow: visible;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	&:after {
		position: absolute;
		top: 0;
		left: 0;
		height: -webkit-fill-available;
		width: -webkit-fill-available;
		background-color: rgba(0, 0, 0, 0.6);
		content: ' ';
		z-index: -1;
	}
`;

export const Loading = () => (
	<LoadingSpinner>
		<LoadingInner>
			<LoadingCircle
				zindex='inherit'
				diameter={13}
				bg='117, 93, 99, .9'
				top={100}
				left={100}
				transform={10}
			/>
			<LoadingCircle
				zindex='1001'
				diameter={8}
				bg='86,79,114,0.9'
				top={50}
				left={50}
				transform={50}
			/>
		</LoadingInner>
	</LoadingSpinner>
);

export default Loading;
