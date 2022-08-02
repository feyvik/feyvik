/** @format */

import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Card } from 'primereact/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import WOW from 'wowjs';

const StyledHeader = Styled.h2`
  color: #FD9B4D;
`;

const StyledButton = Styled.button`
	background-color: #073eaa;
	color: #fff;
  margin-top: 10px;
  cursor: pointer;
`;

function Blog() {
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);
	return (
		<div className='mt-4 w-full' id='blog'>
			<div
				className='w-full wow animate__animated animate__fadeIn'
				data-wow-delay='0.2s'>
				<StyledHeader>Blog</StyledHeader>
				<p className='m-0'>
					I write articles on frontend development and tutorials for beginners.
				</p>
			</div>

			<div className='flex md:flex-row flex-column w-full mt-4'>
				<div className='flex justify-content-start align-items-center md:w-6 px-2'>
					<Card className='flex justify-content-start align-items-center flex-column px-2 w-full mb-4'>
						<div className='mb-2'>
							<LazyLoadImage
								src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2Ffmzb2zrg8x32r55jkofo.jpeg?alt=media&token=0ee8b885-76e1-4c4e-bf65-31be6b378524'
								alt='upload cloud'
								width='100%'
								effect='blur'
								className='border-round'
							/>
						</div>
						<div className='w-full'>
							<h4>Uploading an Image to Firebase Cloud Storage with Angular</h4>
							<small>Feb 17, 2020</small>
							<p className='mt-2 mb-3'>
								In this tutorial, we are going to learn how to upload an image
								to Firebase Cloud Storage from an Angular Project. We’ll be
								using AngularFire library for setting up Firebase in the Angular
								web application. Firebase is Google's mobile platform that helps
								you quickly develop high-quality apps and grow your business.
							</p>
							<a href='https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh'>
								<StyledButton type='button'>
									Read More
									<i className='pi pi-arrow-right'></i>
								</StyledButton>
							</a>
						</div>
					</Card>
				</div>
				<div className='flex justify-content-start align-items-center md:w-6 px-2'>
					<Card className='flex justify-content-start align-items-center lex-column w-full mb-2'>
						<div className='mb-2'>
							<LazyLoadImage
								src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2014.01.03.png?alt=media&token=3284ccdd-58c1-465a-8b6c-c18cec6b7ea8'
								alt='Book app'
								width='100%'
								effect='blur'
								className='border-round'
							/>
						</div>
						<div className='w-full'>
							<h4>Uploading an Image to Firebase Cloud Storage with Angular</h4>
							<small>Feb 17, 2020</small>
							<p className='mt-2 mb-3'>
								In this tutorial, we are going to learn how to upload an image
								to Firebase Cloud Storage from an Angular Project. We’ll be
								using AngularFire library for setting up Firebase in the Angular
								web application. Firebase is Google's mobile platform that helps
								you quickly develop high-quality apps and grow your business.
							</p>
							<a href='https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh'>
								<StyledButton type='button'>
									Read More
									<i className='pi pi-arrow-right'></i>
								</StyledButton>
							</a>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Blog;
