/** @format */

import React from 'react';
import '../../assets/style/Footer.css';

function Footer() {
	return (
		<footer className='flex-column mt-4'>
			<div className='flex flex-column align-items-center justify-content-center'>
				<h4>FIND ME @</h4>
				<div>
					<a href='https://twitter.com/feyvik' className='px-2'>
						<i className='pi pi-twitter'></i>
					</a>
					<a href='https://web.facebook.com/feyvik' className='px-2'>
						<i className='pi pi-facebook'></i>
					</a>
					<a href='https://www.linkedin.com/in/feyvik' className='px-2'>
						<i className='pi pi-linkedin'></i>
					</a>
					<a href='https://github.com/feyvik' className='px-2'>
						<i className='pi pi-github'></i>
					</a>
					<a href='https://www.instagram.com/fey_vik' className='px-2'>
						<i className='pi pi-instagram'></i>
					</a>
				</div>
			</div>
			<hr />
			<div className='flex align-items-center justify-content-center'>
				<p>Built with ❤️ by Favour Vivian Woka © FeyVik 2022</p>
			</div>
		</footer>
	);
}

export default Footer;
