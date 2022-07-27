/** @format */

import React from 'react';
import { Card } from 'primereact/card';
import Styled from 'styled-components';
import { Chip } from 'primereact/chip';

const StyledHeader = Styled.h2`
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
			label: 'Traveling',
			tag: 'pi pi-car',
		},
		{
			label: 'Experimenting with new technology',
			tag: 'pi pi-mobile',
		},
	];
	const language = ['English', 'Ibo'];
	return (
		<div className='flex md:w-full sm:full w-full flex-column lg:w-5 mt-4 lg:ml-3'>
			<Card className='w-full'>
				<StyledHeader>Interest</StyledHeader>

				<div className='flex w-full flex-wrap mt-4'>
					{Interest.map((item, i) => (
						<Chip
							key={i}
							label={item.label}
							style={{
								marginRight: '10px',
								marginBottom: '14px',
								borderRadius: '4px',
							}}
							icon={item.tag}
						/>
						// <Card key={i} className='mt-4 w-ful mr-2'>
						// 	<div className='flex align-items-center justify-content-center'>
						// 		<p className=''>
						// 			<span className={`${item.tag} mr-2`}></span>
						// 			{item.label}
						// 		</p>
						// 	</div>
						// </Card>
					))}
				</div>
			</Card>

			<Card className='w-full mt-4'>
				<StyledHeader>Languages</StyledHeader>

				<div className='flex w-full flex-wrap mt-4'>
					{language.map((item, i) => (
						<Chip
							key={i}
							label={item}
							style={{
								marginRight: '10px',
								marginBottom: '14px',
								borderRadius: '4px',
							}}
						/>
						// <Card key={i} className='mt-4 w-ful mr-2'>
						// 	<div className='flex align-items-center justify-content-center'>
						// 		<p className=''>{item}</p>
						// 	</div>
						// </Card>
					))}
				</div>
			</Card>
		</div>
	);
}

export default Interest;
