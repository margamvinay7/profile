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
	
} from 'react-scroll-motion';

import Cursor from '../../components/Cursor';

// import RickRoll from '../../images/Rick-Roll.mp4';



import React from 'react'

import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/javascript.png'
import ReactL from '../assets/reactjs.png'
import Next from '../assets/nextjs.svg'
import Node from '../assets/nodejs.png'
import Ts from '../assets/typescript.png'
import Redux from '../assets/redux.png'
import Tailwind from '../assets/tailwind.png'
import Material from '../assets/material.png'
import Git from '../assets/git.png'
import MongoDb from '../assets/mongodb.png'
import Express from '../assets/express.jpg'


function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

export default function Skill() {
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

	
	

	return (
		<>
			<Wrapper ><ScrollContainer>
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
						<Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
							<Text2>I am Skilled In Following Technologies</Text2>
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
								}}>

                                </div>
						</Animator>
						<Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
							<Text2 style={{ color: '#F2D7D9' }}>I am a Web Developer,</Text2>
						</Animator>
					</ScrollPage>
                    <ScrollPage>
						<Animator animation={batch(Fade(), StickyIn(),ZoomIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I ventured into Web Development.
								<br />
								<br />
								<center>
									<img
										src={Html}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={Css}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={Js}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
								</center>
							</Text2>
						</Animator>
					</ScrollPage>
                    <ScrollPage>
						<Animator animation={batch(Fade(), StickyIn(),ZoomIn())}>
							<Text2 style={{ fontSize: '2rem' }}>
								I Traversed Through the Advanced Techs.
								<br />
								<br />
								<center>
									<img
										src={Ts}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={ReactL}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={Redux}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
								</center>
							</Text2>
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
							<Text2 style={{ color: '#4C3A51' }}>I started the FrameWorks of React and Styling L
                            <br />
								<br />
								<center>
									<img
										src={Next}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={Tailwind}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
									<img
										src={Material}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
								</center>
                            </Text2>
						</Animator>
					</ScrollPage>

					

					

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(), Move(),ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>After Front-End and begin with Backend 
                            <br/>
                            <br/>
                            <center>
                            <img
										src={Node}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
                                    <img
										src={Express}
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
						<Animator animation={batch(Fade(), Sticky(),ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>To Store Data Iam Experienced The Database
                            <br/>
                            <img
										src={MongoDb}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
                            </Text2>
						</Animator>
					</ScrollPage>

					<ScrollPage></ScrollPage>

					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(),ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>
								Git the Version Controling System 
                                <br/>
                                <center>
                                <img
										src={Git}
										width='110px'
										height='110px'
										alt='pepe_hacker'
									/>
                                    </center>
							</Text2>
						</Animator>
					</ScrollPage>
					<ScrollPage>
						<Animator animation={batch(Fade(), Sticky(),ZoomIn())}>
							<Text2 style={{ fontSize: '3rem' }}>
								Its Not End of My Skills, Ready to Explore More
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
