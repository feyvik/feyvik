/** @format */

import React from 'react';
import { Card } from 'primereact/card';
import Styled from 'styled-components';

const StyledHeader = Styled.h1`
  color: #073eaa;
`;

function Skill() {
	const items = [
		{
			tag: 'HTML 90%',
			bgColor: '#e34c26',
			textColor: '#ebebeb',
		},
		{
			tag: 'CSS 90%',
			bgColor: '#264de4',
			textColor: '#ebebeb',
		},
		{
			tag: 'JavaScript(ES6) 60%',
			bgColor: '#fcdc00',
			textColor: '#000',
		},
		{
			tag: 'Angular 80%',
			bgColor: '#a6120d',
			textColor: '#fff',
		},
		{
			tag: 'TypeScript 40%',
			bgColor: '#3178c6',
			textColor: '#fff',
		},
		{
			tag: 'Vuejs 50%',
			bgColor: '#34495e',
			textColor: '#41b883',
		},
		{
			tag: 'Reactjs 70%',
			bgColor: '#61dafb',
			textColor: '#000',
		},
		{
			tag: 'iles 90%',
			bgColor: '#179cf5',
			textColor: '#000',
		},
		{
			tag: 'Firebase 50%',
			bgColor: '#f57c00',
			textColor: '#fff',
		},
	];

	return (
		<div className='w-7 mt-4 mr-2'>
			<Card className='w-full'>
				<StyledHeader>My Skills</StyledHeader>
			</Card>

			<div className='flex w-full flex-wrap'>
				{items.map((item, i) => (
					<Card
						key={i}
						className='mt-4 w-ful mr-2'
						style={{ backgroundColor: item.bgColor, color: item.textColor }}>
						<div className='flex align-items-center justify-content-center'>
							<p className=''>{item.tag}</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Skill;
