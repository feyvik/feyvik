/** @format */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import DialogCard from '../components/dialog/DialogCard';

function PageRoute() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<DialogCard />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</div>
	);
}

export default PageRoute;
