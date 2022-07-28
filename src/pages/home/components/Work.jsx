/** @format */

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Card } from 'primereact/card';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Styled from 'styled-components';
import WOW from 'wowjs';
const StyledHeader = Styled.h2`
  color: #073eaa;
`;

const channels = [
	{
		id: 0,
		participant: {
			image: (
				<img
					className='border-round'
					src={require('../../../assets/image/houseAfrica.png')}
					alt=''
				/>
			),
			name: 'HouseAfrica',
			specialty:
				'HouseAfrica a startup with the aim of building a blockchain based property record system to help homer buyers and financial companies to access, verify and value properties starting from Real Estate Project Virtualization.',
			link: 'https://houseafrica.io/',
		},
	},
	{
		id: 1,
		participant: {
			image: (
				<img
					className='border-round'
					src={require('../../../assets/image/map.png')}
					alt=''
				/>
			),
			name: 'Sytemap',
			specialty:
				'A digital property registry system that helps estate developers, property buyers, and private estates to digitally register and track their property status.',
			link: 'https://edit-group.com/',
		},
	},
	{
		id: 2,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-26%20at%2013.19.56.png?alt=media&token=317042be-ad87-4bfe-8a71-399f2479dbfd'
					alt=''
				/>
			),
			name: 'Edit Group Service',
			specialty:
				'EGS is an engineering and technology company that is committed to building and developing solid, trusted, and reliable solutions suitable and customizable.',
			link: 'https://edit-group.com/',
		},
	},
	{
		id: 3,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images2%2FScreenshot%202021-08-20%20at%2005.21.29.png?alt=media&token=ce8df331-2524-4d14-b64c-7b08592d4759'
					alt=''
				/>
			),
			name: 'Ticha',
			specialty:
				'Ticha is an online platform dedicated to offering value based student centered learning with tailor-made curriculum to suit each learner’s goals.',
			link: 'https://mentor-app.vercel.app/',
		},
	},
	{
		id: 4,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images2%2FScreenshot%202021-08-20%20at%2007.24.51.png?alt=media&token=cf1ece0b-7534-44cf-ba9e-899d6800ea4d'
					alt=''
				/>
			),
			name: 'zoepool',
			specialty:
				'An Africa-based stakepool focused on educating women in blockchain technology.',
			link: 'https://zoepool.com/',
		},
	},
	{
		id: 5,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-25%20at%2021.44.00.png?alt=media&token=704b842d-592c-463b-b0a4-9bd929f199b1'
					alt=''
				/>
			),
			name: 'Image Link Generator',
			specialty:
				'It is a drag and drop image uploader. It is built with React.js, Firebase storage and material ul',
			link: 'https://image-uploader-one.vercel.app/',
		},
	},
	{
		id: 6,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-23%20at%2018.32.41.png?alt=media&token=3a2f5c0c-756c-4242-9f93-3c1bcff26d78'
					alt=''
				/>
			),
			name: 'A Dashboard',
			specialty:
				'A coding challenge That I built. It is built with bootstrap, React.js',
			link: 'https://aneeque-coding-challenge-taupe.vercel.app/',
		},
	},
	{
		id: 7,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images2%2FScreenshot%202021-08-14%20at%2003.09.01.png?alt=media&token=a258aa88-40d7-4c98-bc10-5d6297ee902b'
					alt=''
				/>
			),
			name: 'An E-commerce',
			specialty: 'I built it for turning Frontend Challenge',
			link: 'https://e-commerce-nine-lilac.vercel.app/',
		},
	},
	{
		id: 8,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images2%2FScreenshot%202021-08-14%20at%2003.00.02.png?alt=media&token=569c04bc-4cb9-4dd9-a6e3-e37416597f64'
					alt='Firebase Storage'
				/>
			),
			name: 'Nike Brand',
			specialty: 'A website I built when leaning css',
			link: 'https://vivian-week-1-project.vercel.app/',
		},
	},
];

function Work() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 762,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
		],
	};
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);
	return (
		<div className='w-full mt-4'>
			<Card
				className='w-full wow animate__animated animate__fadeIn'
				data-wow-delay='0.2s'>
				<StyledHeader>Portfolio</StyledHeader>
				<p>Here are some of my recent projects that i worked on</p>
			</Card>

			<Slider
				{...settings}
				className='wow animate__animated animate__fadeIn'
				data-wow-delay='0.2s'>
				{channels.map((channel) => (
					<div
						className='flex align-items-center justify-content-around'
						key={channel.id}>
						<div className='flex align-items-center justify-content-around font-bold text-black mt-4 px-5 py-3 border-round w-full h-6'>
							<Card
								header={channel.participant.image}
								title={channel.participant.name}
								style={{
									width: '25em',

									padding: '10px',
								}}>
								<p className='m-0 mb-3' style={{ lineHeight: '1.5' }}>
									{channel.participant.specialty}
								</p>
								<a className='text-blue-400' href={channel.participant.link}>
									View Project
								</a>
							</Card>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Work;
