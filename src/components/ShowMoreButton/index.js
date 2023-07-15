import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { a } from '@react-spring/web';

export default function ShowMoreButton({ style }) {
	return (
		<Link to='/works'>
			{' '}
			<ButtonWrapper style={style}>SEE MY WORK</ButtonWrapper>
		</Link>
	);
}

const ButtonWrapper = styled(a.a)`
	/* display: flex; */
	text-decoration: none;
	background: linear-gradient(95.44deg, #f27121 4.35%, #e94057 70.16%, #8a2387 133.82%);
	border: 0.125em solid #121212;
	border-radius: 0.375em;
	padding: 0.75em 1.5em;
	font-size: 16px;
	font-weight: 700;
	color: #fff;
	text-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.2);
	appearance: none;
	box-shadow: inset 0 calc(0.225em * -1) 0 rgba(0, 0, 0, 0.1),
		0 0.125em 0.25em rgba(0, 0, 0, 0.15);
	letter-spacing: -0.04em;
	line-height: 1.5;
	position: relative;
	transition-duration: 294ms;
	transition-property: background-color, color, box-shadow;
	transition-timing-function: ease-out;
	vertical-align: top;
	:active {
		box-shadow: none;
		transform: translateY(0.125em);
	}
`;
