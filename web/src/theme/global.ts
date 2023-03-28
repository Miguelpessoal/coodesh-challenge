import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:focus {
	outline: 0;
}
body {
	background: ${(props) => props.theme.colors.darkBlue[100]};
	/* color: ${(props) => props.theme.colors.darkBlue[100]}; */
	-webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
a{
	text-decoration: none;
}`;
