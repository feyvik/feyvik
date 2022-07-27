/** @format */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';

function PageRoute() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</div>
	);
}

export default PageRoute;
