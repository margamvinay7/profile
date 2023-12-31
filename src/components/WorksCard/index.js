import styled from 'styled-components';
import '../../App.css';
import { a } from '@react-spring/web';
import { FiGithub } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';

export default function WorksCard({ item, style, setProject, setShowCard }) {
	return (
		<div className='work-card-container'>
			<div className='icon-container'>
				<a href={item.repoLink} target='_blank' rel='noreferrer'>
					<FiGithub
						color='#47FFE9'
						size='2em'
						className='icon'
						style={{ right: '30px' }}
					/>
				</a>
				<a href={item.link} target='_blank' rel='noreferrer'>
					<FaEye color='#47FFE9' size='2em' className='icon' style={{ right: '80px' }} />
				</a>
			</div>
			<CardWrapper
				style={style}
				href={item.link}
				target='_blank'
				onMouseOver={() => {
					setProject(item); /*setShowCard(true);*/
				}}
				onMouseOut={() => {
					setProject(null); /*setShowCard(false);*/
				}}>
				<span></span>
				<Card>
					<h3>{item.year}</h3>
					<h1>{item.title}</h1>
					<div>
						<h3 className='tools'>Built using {item.tools.join(', ')}</h3>
						{/* <h3>{item.industry}</h3> */}
						<div style={{ width: '50px', height: '50px' }}></div>
					</div>
				</Card>
			</CardWrapper>
		</div>
	);
}

const CardWrapper = styled(a.a)`
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	align-items: flex-start;
	height: fit-content;
	padding: 50px;
	color: #fff;
	text-decoration: none;
	border-left: 1px solid #8f8f90;
	transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
	span {
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #8f8f90;
		left: 0;
		top: 0;
	}
	:hover {
		background: rgb(251, 133, 0);
		h3 {
			transform: translateX(32px);
		}
		h1 {
			transform: translateX(32px);
		}
		div > h3 {
			transform: translateX(32px);
		}

		.tools {
			color: #fff;
		}
		
		@media screen and (max-width: 767px) {
			h3 {
				transform: unset;
			}
			h1 {
				transform: unset;
			}
			div > h3 {
				transform: unset;
			}
		}
	}
	@media screen and (max-width: 1000px) {
		border: unset;
		padding: 25px;
		span {
			display: none;
		}
		:focus-visible {
			background: rgb(251, 133, 0);
		}
		::before {
			content: '';
			top: 0;
			right: 0;
			width: 15px;
			height: 15px;
			position: absolute;
			border-top: 1pt solid #8f8f90;
			border-right: 1pt solid #8f8f90;
			transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
		}
		::after {
			content: '';
			top: 0;
			left: 0;
			width: 15px;
			height: 15px;
			position: absolute;
			border-top: 1pt solid #8f8f90;
			border-left: 1pt solid #8f8f90;
			transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
		}
		:hover {
			background: unset;
			::before {
				width: 50px;
				height: 50px;
				/* border-width: 5pt; */
			}
			::after {
				width: 50px;
				height: 50px;
			}
		}
	}
`;

const Card = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	min-height: 200px;
	height: fit-content;
	box-sizing: border-box;

	.tools {
		font-size: 20px;
		color: #47ffe9;
	}

	h3 {
		font-size: 16px;
		margin-top: 10px;
		font-family: system-ui;
		white-space: pre-wrap;
		line-height: 28px;
		font-weight: 500;
		letter-spacing: 0;
		max-width: 900px;
		transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
	}
	h1 {
		font-size: 5rem;
		font-weight: 700;
		font-family: system-ui;
		transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0.1s;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0.15s;
	}
	@media screen and (max-width: 1000px) {
		::before {
			content: '';
			bottom: 0;
			right: 0;
			width: 15px;
			height: 15px;
			position: absolute;
			border-right: 1pt solid #8f8f90;
			border-bottom: 1pt solid #8f8f90;
			transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
		}
		::after {
			content: '';
			bottom: 0;
			left: 0;
			width: 15px;
			height: 15px;
			position: absolute;
			border-bottom: 1pt solid #8f8f90;
			border-left: 1pt solid #8f8f90;
			transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
		}
		:hover {
			::before {
				width: 50px;
				height: 50px;
			}
			::after {
				width: 50px;
				height: 50px;
			}
		}
	}
	@media screen and (max-width: 767px) {
		h1 {
			font-size: 40px;
		}
	}
`;
