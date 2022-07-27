/** @format */

import React from 'react';
import { Card } from 'primereact/card';
import Styled from 'styled-components';

const StyledHeader = Styled.h1`
  color: #073eaa;
`;

function Skill() {
	const items = [
		'Html',
		'Css',
		'JavaScript(ES6)',
		'Bootstrap',
		'jQuery',
		'Git',
		'Angular',
		'TypeScript',
		'Sass',
		'Angular Material UI',
		'Firebase',
		'Vuejs',
		'Vuetify',
		'TailwindCSS',
		'Reactjs',
		'Jira',
		'iles',
		'PrimeVue',
		'PrimeReact',
		'Technical Writer',
		'React Material UI',
	];

	return (
		<Card className='mt-4 w-7 mr-2'>
			<div>
				<StyledHeader>My Skills</StyledHeader>
				<div className='flex w-full flex-wrap'>
					{items.map((item, i) => (
						<div
							key={i}
							className='flex w-3 align-items-center justify-content-center px-2 py-2'>
							<p className=''>{item}</p>
						</div>
					))}
				</div>
			</div>
		</Card>
	);
}

export default Skill;
