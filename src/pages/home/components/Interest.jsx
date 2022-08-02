/** @format */

import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Chip } from 'primereact/chip';
import WOW from 'wowjs';

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
	const language = ['English', 'Ibo', 'Ikwerre'];
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);

	return (
		<div className='flex md:w-full sm:full w-full flex-column lg:w-5 mt-4 lg:ml-3 interest'>
			<div
				className='w-full wow animate__animated animate__fadeInRight'
				data-wow-delay='0.2s'>
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
					))}
				</div>
			</div>

			<div
				className='w-full mt-4 wow animate__animated animate__fadeInRight'
				data-wow-delay='0.2s'>
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
					))}
				</div>
			</div>
		</div>
	);
}

export default Interest;
