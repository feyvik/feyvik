/** @format */

import React from 'react';
import Vivian from '../../../assets/image/vivian.png';
import '../style/Hero.css';
import Styled from 'styled-components';
import { Card } from 'primereact/card';

const StyledImg = Styled.img`
  border-radius: 400px;
  object-fit:contain;
`;

const Article = Styled.article`
	width: 100%;
  min-height: 60vh;
	border-radius: 4px;
	padding: 10px;
`;

const Span = Styled.span`
	width: 100%;
  margin-bottom: 10px;
`;

const StyledButton = Styled.button`
	background-color: #073eaa;
	color: #fff;
  margin-top: 10px;
`;

function Hero() {
	return (
		<Card>
			<Article className='flex lg:flex-row flex-column'>
				<div className='flex align-items-center justify-content-center left-box text-center lg:w-6 w-full'>
					<StyledImg
						src={Vivian}
						alt='Vivian Photo'
						className='sm:w-9 md:w-5 lg:w-7 styledImg'
					/>
				</div>
				<div className='flex justify-content-start align-items-center right-box lg:w-6 w-full'>
					<div className='md:text-center lg:text-left w-full'>
						<Span>Hello 👋</Span>
						<h1 className='mt-2'>I Am Favour Vivian Woka</h1>
						<p className='my-2'>Frontend Developer & Technical Writer</p>
						<StyledButton>Say Hi 👋</StyledButton>
						<h4 className='mb-3'>FIND ME @</h4>
						<div className='p-0 m-0 w-full'>
							<a href='https://twitter.com/feyvik' className='mr-2'>
								<i className='pi pi-twitter'></i>
							</a>
							<a href='https://web.facebook.com/feyvik' className='mr-2'>
								<i className='pi pi-facebook'></i>
							</a>
							<a href='https://www.linkedin.com/in/feyvik' className='mr-2'>
								<i className='pi pi-linkedin'></i>
							</a>
							<a href='https://github.com/feyvik' className='mr-2'>
								<i className='pi pi-github'></i>
							</a>
							<a href='https://www.instagram.com/fey_vik' className='mr-2'>
								<i className='pi pi-instagram'></i>
							</a>
						</div>
					</div>
				</div>
			</Article>
		</Card>
	);
}

export default Hero;
