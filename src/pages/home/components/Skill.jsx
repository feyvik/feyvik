/** @format */

import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Chip } from 'primereact/chip';
import WOW from 'wowjs';

const StyledHeader = Styled.h2`
  color: #073eaa;
`;

function Skill() {
	const items = [
		{
			tag: 'HTML',
			bgColor: '#e34c26',
			textColor: '#ebebeb',
			url: require('../../../assets/image/html.svg').default,
		},
		{
			tag: 'CSS',
			bgColor: '#264de4',
			textColor: '#ebebeb',
			url: require('../../../assets/image/css.svg').default,
		},
		{
			tag: 'JavaScript(ES6)',
			bgColor: '#fcdc00',
			textColor: '#000',
			url: require('../../../assets/image/javascript.svg').default,
		},
		{
			tag: 'Angular',
			bgColor: '#a6120d',
			textColor: '#fff',
			url: require('../../../assets/image/angular.svg').default,
		},
		{
			tag: 'TypeScript',
			bgColor: '#3178c6',
			textColor: '#fff',
			url: require('../../../assets/image/typescript.svg').default,
		},
		{
			tag: 'Vuejs',
			bgColor: '#34495e',
			textColor: '#41b883',
			url: require('../../../assets/image/vue.svg').default,
		},
		{
			tag: 'Reactjs',
			bgColor: '#61dafb',
			textColor: '#000',
			url: require('../../../assets/image/react.svg').default,
		},
		{
			tag: 'iles',
			bgColor: '#179cf5',
			textColor: '#000',
			url: require('../../../assets/image/iles.svg').default,
		},
		{
			tag: 'Firebase',
			bgColor: '#f57c00',
			textColor: '#fff',
			url: require('../../../assets/image/firebase.svg').default,
		},
	];

	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);

	return (
		<div className='flex md:w-full mt-4 mr-2 sm:full w-full flex-column lg:w-7 skill'>
			<div
				className='w-full wow animate__animated animate__fadeInLeft'
				data-wow-delay='0.2s'>
				<StyledHeader>Skills</StyledHeader>

				<div className='flex w-full flex-wrap mt-4'>
					{items.map((item, i) => (
						<Chip
							key={i}
							label={item.tag}
							style={{
								backgroundColor: item.bgColor,
								color: item.textColor,
								marginRight: '10px',
								marginBottom: '14px',
								borderRadius: '4px',
								padding: '4px 20px',
							}}
							image={item.url}
						/>
					))}
				</div>
			</div>

			<div
				className='w-full mt-4 wow animate__animated animate__fadeInLeft'
				data-wow-delay='0.2s'>
				<StyledHeader>Education</StyledHeader>
				<h4 className='mb-1'>University Of Port Harcourt, Nigeria — BSc</h4>
				<small>NOVEMBER 2019 - PRESENT</small>
				<ul>
					<li>Studying Statistics and Computer Science</li>
				</ul>
			</div>
		</div>
	);
}

export default Skill;
