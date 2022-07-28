/** @format */

import React from 'react';
import { Card } from 'primereact/card';
import Styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StyledHeader = Styled.h2`
  color: #073eaa;
`;

const StyledButton = Styled.button`
	background-color: #073eaa;
	color: #fff;
  margin-top: 10px;
  cursor: pointer;
`;

function Blog() {
	return (
		<div
			className='mt-4 w-full px-2 py-4 border-round'
			id='blog'
			style={{ background: '#3f599e' }}>
			<Card>
				<StyledHeader>Blog</StyledHeader>
				<p className='m-0'>
					I write articles on frontend development and tutorials for beginners.
				</p>
			</Card>

			<div className='flex md:flex-row flex-column w-full mt-4'>
				<div className='flex justify-content-start align-items-center md:w-6 flex-column px-2 w-full mb-4'>
					<div className='mb-2'>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2Ffmzb2zrg8x32r55jkofo.jpeg?alt=media&token=0ee8b885-76e1-4c4e-bf65-31be6b378524'
							alt='upload cloud'
							width='100%'
							objectFit='cover'
							effect='blur'
							className='border-round'
						/>
					</div>
					<div className='text-white w-full'>
						<h4>Uploading an Image to Firebase Cloud Storage with Angular</h4>
						<small className='text-orange-200'>Feb 17, 2020</small>
						<p className='mt-2 mb-3'>
							In this tutorial, we are going to learn how to upload an image to
							Firebase Cloud Storage from an Angular Project. We’ll be using
							AngularFire library for setting up Firebase in the Angular web
							application. Firebase is Google's mobile platform that helps you
							quickly develop high-quality apps and grow your business.
						</p>
						<a href='https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh'>
							<StyledButton type='button'>
								Read More
								<i className='pi pi-arrow-right'></i>
							</StyledButton>
						</a>
					</div>
				</div>
				<div className='flex justify-content-start align-items-center md:w-6 flex-column px-2 w-full mb-2'>
					<div className='mb-2'>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2014.01.03.png?alt=media&token=3284ccdd-58c1-465a-8b6c-c18cec6b7ea8'
							alt='Book app'
							width='100%'
							effect='blur'
							className='border-round'
						/>
					</div>
					<div className='text-white w-full'>
						<h4>Uploading an Image to Firebase Cloud Storage with Angular</h4>
						<small className='text-orange-200'>Feb 17, 2020</small>
						<p className='mt-2 mb-3'>
							In this tutorial, we are going to learn how to upload an image to
							Firebase Cloud Storage from an Angular Project. We’ll be using
							AngularFire library for setting up Firebase in the Angular web
							application. Firebase is Google's mobile platform that helps you
							quickly develop high-quality apps and grow your business.
						</p>
						<a href='https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh'>
							<StyledButton type='button'>
								Read More
								<i className='pi pi-arrow-right'></i>
							</StyledButton>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
