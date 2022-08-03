/** @format */
import React from 'react';
import '../../home/style/Hero.css';
import Styled from 'styled-components';

const Article = Styled.article`
	width: 100%;
  min-height: 60vh;
	border-radius: 0;
	padding: 10px;
`;

const Span = Styled.span`
	width: 100%;
  margin-bottom: 10px;
`;

function Hero() {
	return (
		<Article className='flex lg:flex-row flex-column box h-screen'>
			<div className='flex justify-content-start align-items-center right-box w-full animate__animated animate__fadeInRight h-screen'>
				<div className='text-center w-full'>
					<Span>Hello 👋</Span>
					<h1 className='mt-2'>I Am Favour Vivian Woka</h1>
					<p className='my-2'>
						I am a Frontend Developer & Technical Writer based in Port Harcourt,
						Nigeria.
					</p>
					<p className='mb-3'>
						I am passionate about developing web-based applications and writing
						front-end online tutorials and articles for beginners. I take pride
						in my code's simplicity.
					</p>
					<p className='mb-3'>
						I used to work for a firm named PrimedSoft, where I was in charge of
						creating user interfaces and implementations APIs. I presently work
						as a React Tutor and Team Lead at KodeCamp.
					</p>
					<p className='mb-3'>
						When I'm not working on software-related activities, you can find me
						trying out a new dancing move (basically I dance for fun)
					</p>
					<p className='mb-3'>
						Want to know more? drop me a line: vivianemma97@gmail.com
					</p>
				</div>
			</div>
		</Article>
	);
}

export default Hero;
