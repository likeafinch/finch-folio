import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { fade } from './Animations';
import '@fontsource/source-sans-pro';

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;

export const GlobalStyle = css`
	*,
	*:before,
	*:after {
		font-family: 'Source Sans Pro';
		box-sizing: border-box;
		outline: none;
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button,
		&::-webkit-scrollbar {
			-webkit-appearance: none;
		}
	}
	body {
		${tw`bg-gradient-to-r from-black to-black-soft`}
		min-height: 100vh;
		/* mobile viewport bug fix */
		min-height: -webkit-fill-available;
	}
	html {
		${tw`min-w-full max-w-screen p-0 m-0`}
		height: -webkit-fill-available;
	}
	div#gatsby-focus-wrapper {
		${tw`relative flex flex-col items-center justify-center w-fill px-2 md:px-0`}
		height: 100vh;
		animation: ${fade};
	}
	a {
		${tw`text-tertiary no-underline`}
	}
`;
