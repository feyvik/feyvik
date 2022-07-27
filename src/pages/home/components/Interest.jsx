/** @format */

import React from 'react';
import { Card } from 'primereact/card';
import Styled from 'styled-components';

const StyledHeader = Styled.h1`
  color: #073eaa;
`;

function Interest() {
	const Interest = [
		{
			label: 'Reading',
			tag: 'pi pi-book',
		},
		{
			label: 'Dancing',
			tag: 'pi pi-user',
		},
		{
			label: 'Experimenting with new technology',
			tag: 'pi pi-mobile',
		},
		{
			label: 'Traveling',
			tag: 'pi pi-car',
		},
	];
	const language = ['English', 'Ibo'];
	return (
		<div className='flex md:w-full sm:full w-full flex-column lg:w-5 mt-4 lg:ml-3'>
			<Card className='w-full'>
				<StyledHeader>My Interest</StyledHeader>
			</Card>
			<div className='flex w-full flex-wrap'>
				{Interest.map((item, i) => (
					<Card key={i} className='mt-4 w-ful mr-2'>
						<div className='flex align-items-center justify-content-center'>
							<p className=''>
								<span className={`${item.tag} mr-2`}></span>
								{item.label}
							</p>
						</div>
					</Card>
				))}
			</div>

			<Card className='w-full mt-4'>
				<StyledHeader>Languages</StyledHeader>
			</Card>

			<div className='flex w-full flex-wrap'>
				{language.map((item, i) => (
					<Card key={i} className='mt-4 w-ful mr-2'>
						<div className='flex align-items-center justify-content-center'>
							<p className=''>{item}</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Interest;
