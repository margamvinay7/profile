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
import { osName } from 'react-device-detect';
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

	// const [offsetY, setOffsetY] = useState(0);
	// const handleScroll = () => setOffsetY(window.pageYOffset);
	// console.log((offsetY/(500*windowSize.innerHeight) * 100))
	// useEffect(() => {
	//     window.addEventListener('scroll', handleScroll);

	//     return () => window.addEventListener('scroll', handleScroll);
	// }, [])

	// Rick Roll shh
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
							<Text2>Hi.</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2>I am Mohit.</Text2>
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
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: '#635666',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
							<Text2 style={{ color: '#D3EBCD' }}>Also, I'm Funny :)</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move())}>
							<Text2 style={{ fontSize: '3rem' }}>
								Grab something to eat as this is going to be long.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

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
								In Class 7th I got my first Android Device.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky())}>
							<Text2 style={{ fontSize: '3rem' }}>
<<<<<<< HEAD
								But, I always wanted a computer{' '}<br />
=======
								But, I always wanted a computer{' '}
>>>>>>> 748e6937dc5736d862b3c0426c94219098372ca3
								<img
									alt=''
									style={{ width: '3.1rem' }}
									src='https://cdn3.emoji.gg/emojis/5163-95-crythumbsup.png'
								/>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky())}>
							<Text2 style={{ fontSize: '3rem' }}>
								Later I get to know, Android is just top of Linux kernel, I just
<<<<<<< HEAD
								need to root it to get Sudo Access{' '}<br />
=======
								need to root it to get Sudo Access{' '}
>>>>>>> 748e6937dc5736d862b3c0426c94219098372ca3
								<img
									alt=''
									style={{ width: '3rem' }}
									src='https://cdn3.emoji.gg/emojis/5498_catJAM.gif'
								/>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>It was cool!</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '4rem' }}>
								& Then, I became interested in Hacking. Techies can relate to me.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								It was fun, like hacking in-game currencies & Wi-Fi passwords &
								show-offs
<<<<<<< HEAD
								<br /><br />
								OMG Internet prices then was so{' '}<br />
=======
								<br />
								OMG Internet prices then was so{' '}
>>>>>>> 748e6937dc5736d862b3c0426c94219098372ca3
								<img
									src='https://cdn3.emoji.gg/emojis/9125-frog-stoned.png'
									width='64px'
									height='64px'
									alt='frog_stoned'
								/>{' '}
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(StickyIn(), Fade(), ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>
								But then, some bad experiences came into my life.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), ZoomOut())}>
							<Text2 style={{ fontSize: '2rem' }}>
								JEE{' '}
								<img
									alt=''
									style={{ width: '32px' }}
									src='https://cdn3.emoji.gg/emojis/2982-pepecry.png'
								/>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: '#635666',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
							<Text2
								style={{ fontSize: '2rem', lineHeight: '3rem', color: '#D3EBCD' }}>
								I achieved a good enough rank to get into HBTU Kanpur (ESTD 1923){' '}
								<br />
								which have highest Package of 64Lpa back then, I'm sold here.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								But due to a small error in the internal-sliding form, <br />
								my Electronics seat was given to someone else with a lower rank.
								<br />
								<br />{' '}
								<center>
									<img
										src='https://cdn3.emoji.gg/emojis/1262-crycry.gif'
										width='64px'
										height='64px'
										alt='CRYCRY'
									/>
								</center>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								My allotted branch is Chemical Technology(Paint), I'm devasted back
								then.
								<br />
								<br />{' '}
								<center>
									<img
										src='https://cdn3.emoji.gg/emojis/5500-thosewhoknow.png'
										width='100px'
										height='100px'
										alt='CRYCRY'
									/>
								</center>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I thought about changing colleges, but the fees were already
								submitted.
							</Text2>
						</Animator>
					</ScrollPage>
					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								However, I gave myself hope and believed that everything happens for
								a good reason.
								<br />
								<br />
								<br />
								Like a<br />{' '}
								<img
									src='https://cdn3.emoji.gg/emojis/5955-gigagigachad.gif'
									width='200px'
									height='200px'
									alt='Gigagigachad'
								/>
							</Text2>
						</Animator>
					</ScrollPage>
					<ScrollPage></ScrollPage>
					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								Then, I started with C language as per the curriculum and achieved a
								10 CGPA in it <br />
								<br />
								P.S. My first and last 10 in college :/
								<br />
								<br />
								<br />
								Again like a<br />{' '}
								<img
									src='https://cdn3.emoji.gg/emojis/5955-gigagigachad.gif'
									width='200px'
									height='200px'
									alt='Gigagigachad'
								/>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								Afterwards, I learned C++ and DSA, but got bored early on!
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>/* First Year Ends */</Text2>
						</Animator>
					</ScrollPage>

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

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I started loving JS{' '}
								<img
									src='https://cdn3.emoji.gg/emojis/3540-lovebob.png'
									width='64px'
									height='64px'
									alt='lovebob'
								/>
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I joined the Entrepreneurship Cell of our college as an Associate
								Web Developer!{' '}
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>/* Second Year Ends */</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I delved deeper into learning React.js and Node.js.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), StickyIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								worked on more cool projects. #LearnByDoing
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move())}>
							<Text2 style={{ fontSize: '2rem' }}>
								Done Freelancing to keep my pockets filled.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(0, 0), Fade())}>
							<div
								style={{
									position: 'absolute',
									zIndex: -1,
									background: `url(${WinnerBG}) no-repeat`,
									backgroundSize: '100vw 100vh',
									filter: 'brightness(25%)',
									height: '100vh',
									width: '100vw',
								}}></div>
						</Animator>
						<Animator animation={batch(Sticky(), Fade(), MoveIn())}>
							<Text2 style={{fontSize: '3.5rem', color: '#F2D7D9', mixBlendMode: 'difference'}}>
								Became the{' '}
								<span
									style={{
										textDecoration: 'none',
										background: 'linear-gradient(to right, #DFF6FF, #1363DF)',
										backgroundRepeat: 'repeat-x',
										backgroundSize: '100% 5px',
										backgroundPosition: '0 95%',
										lineHeight: '4rem',
									}}>
									Vice President of Entrepreneurship Cell
								</span>{' '}
								that I joined as{' '}
								<span
									style={{
										textDecoration: 'none',
										background: 'linear-gradient(to right, #DFF6FF, #1363DF)',
										backgroundRepeat: 'repeat-x',
										backgroundSize: '100% 5px',
										backgroundPosition: '0 95%',
									}}>
									Associate Web Developer
								</span>{' '}
								:)
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), MoveIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								Yup this thing is unexpected. (To give you some context it have 80+
								Members)
								<br />
								<br />
								"Sometimes the most unexpected paths lead to the most extraordinary
								journeys."
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), MoveIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I conducted various entrepreneurship seminars, sessions, and
								activities.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), MoveOut())}>
							<Text2 style={{ fontSize: '2rem' }}>Made some good friends :)</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky())}>
							<Text2 style={{ fontSize: '2rem' }}>/* Third Year Ends */</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator
							animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(200, 0))}>
							<Text2 style={{ fontSize: '3rem' }}>
								And now, here we are in 2023 :) <br />
								In Recession Rollercoaster
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Sticky(), Fade())}>
							<Text2 style={{ fontSize: '3.25rem' }}>...</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), MoveOut())}>
							<Text2 style={{ fontSize: '3.25rem' }}>
								Recently I restarted my blog{' '}
								<a
									style={{ color: '#F9F9F9' }}
									href='https://mohitdotexe.hashnode.dev'
									target='_blank'
									without
									rel='noreferrer'>
									Check it out here
								</a>
								.
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>
					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move())}>
							<Text2 style={{ fontSize: '3.25rem' }}>
								And this brings us to the present
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
									<SocialIcons color='#999' email='mohit.chauhan2580@gmail.com' />
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
								<span style={{ margin:'0', marginTop: '1rem' }}>
									<SocialIcons color='#999' email='mohit.chauhan2580@gmail.com' />
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
									<SocialIcons color='#999' email='mohit.chauhan2580@gmail.com' />
								</span>
							</div>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()} style={{margin:'0'}}>
							<ErrorWindows />
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
								That's probably enough for today!
								<br />
								Stop scrolling!
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
								That's probably enough for today!
								<br />
								Stop scrolling!
							</Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage>
						<Animator animation={Sticky()}>
							<Text2 style={{ fontSize: '4rem', fontWeight: '900' }}>
								That's probably enough for today!
								<br />
								Stop scrolling!
							</Text2>
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

					<ScrollPage>
						<Animator animation={batch(Sticky(), Fade())}>
							<div
								ref={ref}
								style={{ width: '100vw', height: '100vh', background: '#000' }}>
								{inView ? <RickRoll os={osName} /> : null}
							</div>
						</Animator>
					</ScrollPage>
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

// const HeroBackground = styled.div`
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background: url(${HeroImage}) no-repeat center center;
//     top: 0;
//     background-size: cover;
//     z-index: -1;
// `

// const Text = styled.div`
//     font-family: 'Space Grotesk', sans-serif;
//     font-size: 8rem;
//     color: #999;
//     mix-blend-mode: difference;
//     font-weight: 600;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `

const Text2 = styled.h2`
	font-family: 'Space Grotesk', sans-serif;
	font-size: 8rem;
	color: #f6fbf4;
	mix-blend-mode: difference;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		font-size: 3rem !important;
	}
<<<<<<< HEAD
	@media screen and (max-width: 600px) {
		font-size: 1.25rem !important;
		margin-inline: -40px;
		margin-top: -40px;
=======
	@media screen and (max-width: 480px) {
		font-size: 1.25rem !important;
		margin: -30px;
>>>>>>> 748e6937dc5736d862b3c0426c94219098372ca3
	}
`;
