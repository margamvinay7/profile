import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	Sticky,
	batch,
	Fade,
	MoveOut,
	StickyIn,
	FadeIn,
	ZoomIn,
	Move,
	MoveIn,
	ZoomOut,
} from 'react-scroll-motion';
import { useInView } from 'react-intersection-observer';
import Cursor from '../../components/Cursor';
import SocialIcons from '../../components/SocialIcons';
import WinnerBG from '../../images/winner.jpg';
// import RickRoll from '../../images/Rick-Roll.mp4';
import RickRoll from '../../components/RickRoll';
import ErrorWindows from '../../components/ErrorWindows';

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

export default function Me() {
	const [windowSize, setWindowSize] = useState(getWindowSize());
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
		if (windowSize.innerWidth < 1024) {
			setTablet(true);
		} else {
			setTablet(false);
		}
	}, [windowSize]);

	
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	return (
		<>
			<Wrapper>
				<ScrollContainer>
					<ScrollPage>
						<Animator animation={batch(Sticky(), Fade(), MoveOut(0, -2000))}>
							<Text2 style={{ fontSize: '4rem' }}>Hi.</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2>I am Vinay.</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: '#748DA6',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
							<Text2 style={{ color: '#F2D7D9' }}>I am a Web Developer,</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: '#576F72',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(StickyIn(), Fade())}>
							<Text2 style={{ color: '#F0EBE3' }}>Open Source Enthusiast,</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: '#E7AB79',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(Sticky(), Fade(), MoveIn())}>
							<Text2 style={{ color: '#4C3A51' }}>and a Student.</Text2>
						</Animator>
					</ScrollPage>

					

					

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move())}>
							<Text2 style={{ fontSize: '3rem' }}>Keep scrollin'!</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky())}>
							<Text2 style={{ fontSize: '3rem' }}>Here's my journey.</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky())}>
							<Text2 style={{ fontSize: '3rem' }}>
								In Bachelors Degree in Technology 2-2 semester I was staarted My developer Journey
							</Text2>
						</Animator>
					</ScrollPage>

					

					

					<ScrollPage>
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>It was cool!</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '4rem' }}>
								& Then, I became interested in Artificail Intelligence. Techies can relate to me.
							</Text2>
						</Animator>
					</ScrollPage>

					

					

					

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								In Bachelors degree I choose my Artificial Intelligence which I was Interested In
								<br />
								<br />{' '}
								<center>
									
								</center>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					

					<ScrollPage></ScrollPage>

					<ScrollPage></ScrollPage>
					

					<ScrollPage></ScrollPage>

					

					<ScrollPage></ScrollPage>

					
					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I ventured into Web Development.
								<br />
								<br />
								<center>
									<img
										src='https://cdn3.emoji.gg/emojis/4297-pepe-hacker.gif'
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
								</center>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I got introduced to HTML{' '}
								<img
									alt=''
									style={{ width: '32px' }}
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
								/>
								, CSS{' '}
								<img
									alt=''
									style={{ width: '32px' }}
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
								/>{' '}
								and JavaScript{' '}
								<img
									alt=''
									style={{ width: '32px' }}
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
								/>
								.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>


					<ScrollPage>
						<Animator animation={batch(Sticky(), FadeIn())}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100%',
								}}>
								<Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
								<span style={{ marginTop: '1rem' }}>
									<SocialIcons color='#999' email='margamvinay77@gmail.com' />
								</span>
							</div>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100%',
								}}>
								<Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
								<span style={{ marginTop: '1rem' }}>
									<SocialIcons color='#999' email='margamvinay77@gmail.com' />
								</span>
							</div>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100%',
								}}>
								<Text2 style={{ fontSize: '3.25rem' }}>Me.</Text2>
								<span style={{ marginTop: '1rem' }}>
									<SocialIcons color='#999' email='margamvinay77@gmail.com' />
								</span>
							</div>
						</Animator>
					</ScrollPage>


					
					
					

					

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
								Still scrollin'?
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					
				</ScrollContainer>
				<GoBack to='/' id='home'>
					← Home
				</GoBack>
				<ScrollDown>Scroll ↓</ScrollDown>
				{!tablet ? <Cursor /> : null}
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	* {
		@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
	}
	background: #111;
`;

const GoBack = styled(Link)`
	position: fixed;
	top: 1rem;
	left: 1rem;
	color: #999;
	text-decoration: none;
`;

const ScrollDown = styled.div`
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	color: #999;
`;

 

const Text2 = styled.h2`
	font-family: 'Space Grotesk', sans-serif;
	font-size: 8rem;
	color: #f6fbf4;
	mix-blend-mode: difference;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		font-size: 3rem !important;
		line-height: 3rem !important;
	}
	@media screen and (max-width: 600px) {
		font-size: 1.8rem !important;
		margin-inline: -40px;
		margin-top: -25px;
	}
`;
