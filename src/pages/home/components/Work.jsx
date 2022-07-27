/** @format */

import React from 'react';
import Slider from 'react-slick';
import { Card } from 'primereact/card';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Styled from 'styled-components';

const StyledHeader = Styled.h2`
  color: #073eaa;
`;

const channels = [
	{
		id: 1,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-26%20at%2013.19.56.png?alt=media&token=317042be-ad87-4bfe-8a71-399f2479dbfd'
					alt=''
				/>
			),
			name: 'EDIT GROUP SERVICES',
			specialty: 'I used Javascript and Firebase Hosting',
			link: 'https://edit-group.com/',
		},
	},
	{
		id: 2,
		participant: {
			image: (
				<img
					className='border-round'
					src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images2%2FScreenshot%202021-08-20%20at%2005.21.29.png?alt=media&token=ce8df331-2524-4d14-b64c-7b08592d4759'
					alt=''
				/>
			),
			name: 'MentorApp',
			specialty:
				'A website that allows users to have 1-on-1 conversations about growth, marketing, and everything in between with the world top 3% of startup and marketing mentors',
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
			specialty: 'An Africa-based stakepool focused on',
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
				'It is a drag and drop image uploader. It is built React.js, Firebase storage and material ul',
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
				'A coding challenge That I built. It is built with bootstrap, react',
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
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='w-full mt-4'>
			<Card className='w-full'>
				<StyledHeader>Portfolio</StyledHeader>
				<p>Here are some of my recent projects that i worked on</p>
			</Card>
			<Slider {...settings}>
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
									height: '440px',
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
