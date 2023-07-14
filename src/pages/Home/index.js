import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import DesktopNav from '../../components/DesktopNav';
import ShowMoreButton from '../../components/ShowMoreButton';
import bgDesktop from '../../images/bgDesktop_Optimized.jpg';
import SocialIcons from '../../components/SocialIcons';
import Cursor from '../../components/Cursor';
import '../../App.css'
import { a, useChain, useSpring, useTrail, useSpringRef } from '@react-spring/web';

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

export default function Home() {
	const movingBackground = useRef();
	const [windowSize, setWindowSize] = useState(getWindowSize());
	const [mobile, setMobile] = useState(false);
	const [tablet, setTablet] = useState(false);
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	useEffect(() => {
		if (windowSize.innerWidth < 768) {
			setMobile(true);
		} else {
			setMobile(false);
		}
		if (windowSize.innerWidth < 1024) {
			setTablet(true);
		} else {
			setTablet(false);
		}
	}, [windowSize]);

	// useEffect(() => {
	//   const handleWindowMouseMove = event => {
	//     console.log(event.screenX, event.screenY);
	//     movingBackground.current.style.backgroundPosition = `top ${event.screenY} left ${event.screenX}`
	//   };
	//   window.addEventListener('mousemove', handleWindowMouseMove);

	//   return () => {
	//     window.removeEventListener('mousemove', handleWindowMouseMove);
	//   };
	// }, []);

	const el = useRef(null);
	const elParent = useRef(null);

	useEffect(() => {
		var temp = 0;
		const stringColors = ['#47FFE9', '#00FFAB', '#F7EC09', '#F9D371'];
		const typed = new Typed(el.current, {
			strings: ['developer', 'open sourcer', 'student'],
			shuffle: false,
			startDelay: 500,
			typeSpeed: 60,
			backSpeed: 50,
			backDelay: 1000,
			loop: true,
			preStringTyped: function (arrayPos, self) {
				elParent.current.style.color = stringColors[temp];
				temp += 1;
			},
			onLastStringBackspaced: function (self) {
				temp = 0;
			},
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	}, []);

	useEffect(() => {
		var lFollowX = 0,
			lFollowY = 0,
			x = 0,
			y = 0,
			friction = 1 / 50; // friction = 1 / 30;

		function moveBackground() {
			x += (lFollowX - x) * friction;
			y += (lFollowY - y) * friction;

			var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

			movingBackground.current.style.transform = translate;

			window.requestAnimationFrame(moveBackground);
		}

		window.addEventListener('mousemove', function (e) {
			var lMouseX = Math.max(-100, Math.min(100, windowSize.innerWidth / 2 - e.clientX));
			var lMouseY = Math.max(-100, Math.min(100, windowSize.innerHeight / 2 - e.clientY));
			lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			lFollowY = (10 * lMouseY) / 100;
		});

		moveBackground();
	}, [windowSize.innerHeight, windowSize.innerWidth]);

	const backgroundRef = useSpringRef();
	const backgroundAnim = useSpring({
		ref: backgroundRef,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0 },
		to: { opacity: 1 },
	});
	const navRef = useSpringRef();
	const navReveal = useSpring({
		ref: navRef,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0, x: -20, y: -200 },
		to: { opacity: 1, x: 0, y: 0 },
	});
	const wtRef = useSpringRef();
	const worksTitleRef = useSpringRef();

	const descLine1Ref = useSpringRef();
	const descLine2Ref = useSpringRef();
	const descLine3Ref = useSpringRef();
	const descLine4Ref = useSpringRef();
	const descLine1Anim = useTrail(2, {
		ref: descLine1Ref,
		config: { mass: 5, tension: 2000, friction: 100 },
		from: { opacity: 0, x: 20, height: 0 },
		to: { opacity: 1, x: 0, height: 110 },
	});
	const descLine1List = "Hi, I'm".split(' ');
	const descLine2Anim = useTrail(2, {
		ref: descLine2Ref,
		config: { mass: 5, tension: 2000, friction: 100 },
		from: { opacity: 0, x: 20, height: 0 },
		to: { opacity: 1, x: 0, height: 110 },
	});
	const descLine2List = 'Mohit Chauhan,'.split(' ');
	const descLine3Anim = useSpring({
		ref: descLine3Ref,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0, x: 20, height: 0 },
		to: { opacity: 1, x: 0, height: 110 },
	});
	const descLine4Anim = useSpring({
		ref: descLine4Ref,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0, x: -20 },
		to: { opacity: 1, x: 0 },
	});
	const workButtonRef = useSpringRef();
	const workButtonAnim = useSpring({
		ref: workButtonRef,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0, x: -20 },
		to: { opacity: 1, x: 0 },
	});
	const socialIconsRef = useSpringRef();
	const socialIconsAnim = useSpring({
		ref: socialIconsRef,
		config: { mass: 5, tension: 2000, friction: 200 },
		from: { opacity: 0, x: -20 },
		to: { opacity: 1, x: 0 },
	});
	useChain([navRef, wtRef, worksTitleRef, backgroundRef, descLine1Ref, descLine2Ref, descLine3Ref, descLine4Ref, workButtonRef, socialIconsRef], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 200);

	return (
		<>
			<HeroWrapper>
				<BGdiv ref={movingBackground} style={backgroundAnim} />
				<DesktopNav style={navReveal} />
				<MainAreaWrapper>
					<IntroWrapper>
						<h1>
							{descLine1Anim.map(({ ...style }, index) => (
								<a.span style={style} key={index}>
									{descLine1List[index]}{' '}
								</a.span>
							))}
							<br />
							{descLine2Anim.map(({ ...style }, index) => (
								<a.span style={style} key={index}>
									{descLine2List[index]}{' '}
								</a.span>
							))}
							<br />
							<a.span style={descLine3Anim}>
								a{' '}
								<div style={{ display: 'inline' }} ref={elParent}>
									<span ref={el} id='cursorHover'>
										developer
									</span>
								</div>
							</a.span>
						</h1>

							<a.h2 className="tagline" style={descLine4Anim}>
								Unlocking Innovation Through Code.
							</a.h2>

						<ShowMoreButton style={workButtonAnim} />
					</IntroWrapper>
					{/* space for right section  */}
				</MainAreaWrapper>
				<FooterWrapper>
					{!mobile ? <SocialIcons style={socialIconsAnim} /> : <SocialIcons style={socialIconsAnim} email='mohit.chauhan2580@gmail.com' />}
					<Year style={socialIconsAnim}>
						20
						<br />
						23
					</Year>
				</FooterWrapper>
				{!tablet ? <Cursor /> : null}
			</HeroWrapper>
		</>
	);
}

const HeroWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
	background-color: #000;
	z-index: 0;
	/* background-image: url(${bgDesktop});
    background-position: top -10vh left;
    @media screen and (max-width: 1200px) {
        background-position: top left;
    }
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(95%); */

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BGdiv = styled(a.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background: url(${bgDesktop}) no-repeat center center;
	background-position: top -10vh left;
	background-size: cover;
	filter: brightness(70%);
	@media screen and (max-width: 1200px) {
		background-position: top left;
	}

	transform: scale(1.1);
`;

const MainAreaWrapper = styled.div`
	flex: 1;
	margin-left: 64px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 767px) {
		margin-left: 34px;
	}
`;

const IntroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: baseline;
	gap: 28px;
	h1 {
		font-weight: 700;
		font-size: 64px;
		color: #fff;
	}
	h2 {
		font-size: 32px;
		font-weight: 400;
		color: #fff;
	}
	@media screen and (max-width: 767px) {
		h1 {
			font-size: 40px;
		}
		h2 {
			font-size: 24px;
		}
	}
`;

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 1em;
`;

const Year = styled(a.span)`
	font-size: 32px;
	font-weight: 700;
	line-height: 75%;
	color: #fff;
	margin-right: 1rem;
	@media screen and (max-width: 767px) {
		display: none;
	}
`;
