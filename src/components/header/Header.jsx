/** @format */

import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from '../../assets/image/logo-no-bg.svg';
import { Link } from 'react-router-dom';
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

	const items = [
		{
			label: 'About Me',
			template: (item, options) => {
				return (
					<Link to='/about' className={options.className}>
						{item.label}
					</Link>
				);
			},
		},
		{
			label: 'Blog',
			template: (item, options) => {
				return (
					<Link to='/#blog' className={options.className}>
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
						to='#'
						className={options.className}
						onClick={() => onClick('displayMaximizable')}>
						{item.label}
					</Link>
				);
			},
		},
	];

	const start = (
		<Link to='/ '>
			<img alt='logo' src={Logo} height='40' className='mr-2' />
		</Link>
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
