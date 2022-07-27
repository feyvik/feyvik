/** @format */

import React from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from '../../assets/image/logo-no-bg.svg';
import { Link } from 'react-router-dom';

function Header() {
	const items = [
		{
			label: 'About Me',
			template: (item, options) => {
				return (
					<Link
						to={'/'}
						className={options.className}
						target={item.target}
						onClick={options.onClick}>
						{item.label}
					</Link>
				);
			},
		},
		{
			label: 'Blog',
			template: (item, options) => {
				return (
					<Link
						to={'/'}
						className={options.className}
						target={item.target}
						onClick={options.onClick}>
						{item.label}
					</Link>
				);
			},
		},
		{
			label: 'Contact',
			template: (item, options) => {
				return (
					<Link
						to={'/'}
						className={options.className}
						target={item.target}
						onClick={options.onClick}>
						{item.label}
					</Link>
				);
			},
		},
	];

	const start = (
		<Link to='/'>
			<img
				alt='logo'
				src={Logo}
				// onError={(e) =>
				// 	(e.target.src =
				// 		'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
				// }
				height='40'
				className='mr-2'
			/>
		</Link>
	);

	return (
		<div>
			<Menubar model={items} start={start} />
		</div>
	);
}

export default Header;
