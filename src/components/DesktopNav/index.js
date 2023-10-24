import styled, { keyframes } from 'styled-components';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { a } from '@react-spring/web';
import { useState } from 'react';

export default function DesktopNav({ style }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<NavWrapper style={style}>
			<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
				<Logo />
			</Link>
			<HamburgerButton onClick={toggleMenu}>
				<HamburgerIcon isOpen={isMenuOpen} />
			</HamburgerButton>
			<LinksWrapper isOpen={isMenuOpen}>
				<Links isOpen={isMenuOpen}>
					<NavLink to='/' id='home'>
						Home
					</NavLink>
					<NavLink to='/works' id='works'>
						{' '}
						Works
					</NavLink>
					<NavLink to='/skills'>Skills</NavLink>
					<NavLink to='/me'>Me</NavLink>
				</Links>
			</LinksWrapper>
		</NavWrapper>
	);
}

const NavWrapper = styled(a.nav)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 52px;
	margin-left: 64px;
	margin-right: 64px;
	/* width: 100%; */
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		margin-right: 2rem;
	}
	@media screen and (max-width: 767px) {
		margin-left: 34px;
		margin-right: 30px;
		margin-top: 30px;
	}
`;

const HamburgerButton = styled.button`
	display: none;
	position: absolute;
	right: 20px;
	top: 50px;
	@media screen and (max-width: 600px) {
		display: block;
		background: none;
		border: none;
		padding: 10px;
		cursor: pointer;
	}
`;

const HamburgerIcon = styled.span`
	display: inline-block;
	width: 24px;
	height: 3px;
	background-color: ${(props) => (props.isOpen ? 'transparent' : 'white')};
	transition: background-color 0.3s ease-in-out;

	::before,
	::after {
		content: '';
		display: block;
		width: 24px;
		height: 3px;
		background-color: white;
		transition: transform 0.3s ease-in-out;
	}

	::before {
		transform: translateY(${(props) => (props.isOpen ? '6px' : '-6px')})
			rotate(${(props) => (props.isOpen ? '45deg' : '0')});
	}

	::after {
		transform: translateY(${(props) => (props.isOpen ? '-6px' : '6px')})
			rotate(${(props) => (props.isOpen ? '-45deg' : '0')});
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 767px) {
		display: ${(props) => (props.isOpen ? 'flex' : 'none')};
		flex-direction: column;
		align-items: flex-start;
		margin-top: 20px;
		gap: 10px;
	}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Links = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 64px;
	transition: 1s all ease-in-out;
	animation: ${( props ) => ( props.isOpen ? fadeOut: fadeIn)} 0.5s ease-in-out;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		gap: 10px;
		position: absolute;
		right: 40px;
		top: 84px;
		padding-inline: 30px;
		padding-block: 20px;
		border-radius: 23px;
		background-color: black;
		border: 1px solid white;
	}
`;

const NavLink = styled(Link)`
	display: inline-block;
	position: relative;
	text-decoration: none;
	color: #fff;
	/* mix-blend-mode: difference; */
	font-size: 24px;
	font-weight: 500;
	span {
		font-size: 16px;
	}
	:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		bottom: 0;
		left: 0;
		background: linear-gradient(to right, #8a2387, #e94057, #f27121);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	@media screen and (max-width: 600px) {
		font-size: 20px;

		/* :nth-child(1) {
            display: none;
        }
        :nth-child(2) {
            display: none;
        }
        :nth-child(3) {
            display: none;
        } 
        :nth-child(4) {
            display: none;
        } 
        :nth-child(3)::before {
            content: '01. Me';
        } */
	}
`;
