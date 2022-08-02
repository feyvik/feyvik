/** @format */

import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from '../../assets/image/logo-no-bg.svg';
import { NavLink } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import DialogCard from '../dialog/DialogCard';

function Header() {
	const [displayMaximizable, setDisplayMaximizable] = useState(false);

	const dialogFuncMap = {
		displayMaximizable: setDisplayMaximizable,
	};

	const onClick = (name, position) => {
		dialogFuncMap[`${name}`](true);
	};

	const onHide = (name) => {
		dialogFuncMap[`${name}`](false);
	};

	let activeStyle = {
		borderBottom: '2px solid',
		borderRadius: '0 !important',
	};

	const items = [
		{
			label: 'About Me',
			template: (item, options) => {
				return (
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/about'
						className={`${options.className} animate__animated animate__fadeIn`}>
						{item.label}
					</NavLink>
				);
			},
		},
		{
			label: 'Blog',
			template: (item, options) => {
				return (
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/#blog'
						className={`${options.className} animate__animated animate__fadeIn`}>
						{item.label}
					</NavLink>
				);
			},
		},
		{
			label: 'Contact',
			template: (item, options) => {
				return (
					<NavLink
						to='#'
						className={`${options.className} animate__animated animate__fadeIn`}
						onClick={() => onClick('displayMaximizable')}>
						{item.label}
					</NavLink>
				);
			},
		},
	];

	const start = (
		<NavLink to='/ '>
			<img
				alt='logo'
				src={Logo}
				height='40'
				className='mr-2 animate__animated animate__fadeIn'
			/>
		</NavLink>
	);

	return (
		<div>
			<Menubar model={items} start={start} />

			<Dialog
				header='Contact'
				visible={displayMaximizable}
				maximizable
				modal
				style={{ width: '50vw' }}
				onHide={() => onHide('displayMaximizable')}>
				<DialogCard />
			</Dialog>
		</div>
	);
}

export default Header;
