/** @format */

import React, { useState } from 'react';
import Vivian from '../../../assets/image/vivian.png';
import '../../home/style/Hero.css';
import Styled from 'styled-components';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import DialogCard from '../../../components/dialog/DialogCard';

const StyledImg = Styled.img`
  border-radius: 400px;
  object-fit:contain;
`;

const Article = Styled.article`
	width: 100%;
  min-height: 60vh;
	border-radius: 4px;
	padding: 10px;
`;

const Span = Styled.span`
	width: 100%;
  margin-bottom: 10px;
`;

const StyledButton = Styled.button`
	background-color: #073eaa;
	color: #fff;
  margin-top: 10px;
`;

function Hero() {
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

	return (
		<Card>
			<Article className='flex lg:flex-row flex-column'>
				<div className='flex align-items-center justify-content-center left-box text-center lg:w-6 w-full'>
					<StyledImg
						src={Vivian}
						alt='Vivian Photo'
						className='sm:w-9 md:w-5 lg:w-7 styledImg'
					/>
				</div>
				<div className='flex justify-content-start align-items-center right-box lg:w-6 w-full'>
					<div className='md:text-center lg:text-left w-full'>
						<Span>Hello 👋</Span>
						<h1 className='mt-2'>I Am Favour Vivian Woka</h1>
						<p className='my-2'>
							I a Frontend Developer & Technical Writer based in Port Harcourt,
							Nigeria.
						</p>
						<p className='mb-3'>
							I am passionate about building applications that run on the web
							and documenting front-end web tutorials and articles for
							beginners. I pride myself on code simplicity.
						</p>
						<p className='mb-3'>
							Formally, I worked with a company called PrimedSoft and I was
							responsible for building user interfaces and implementing APIs. I
							currently work at KodeCamp as a React Tutor and Team Lead.
						</p>
						<p className='mb-3'>
							When I am not doing software-related activities, you will find me
							practicing a new dance step (basically I dance for fun)
						</p>
						<p className='mb-3'>
							Want to know more? drop me a line: vivianemma97@gmail.com
						</p>
					</div>
				</div>
			</Article>

			<Dialog
				header='Contact'
				visible={displayMaximizable}
				maximizable
				modal
				style={{ width: '50vw' }}
				onHide={() => onHide('displayMaximizable')}>
				<DialogCard />
			</Dialog>
		</Card>
	);
}

export default Hero;
