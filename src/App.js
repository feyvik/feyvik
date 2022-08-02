/** @format */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import PageRoute from './router/PageRoute';
import Footer from './components/footer/Footer';
function App() {
	const [colorChange, setColorchange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<main>
			<header className={colorChange ? 'colorChange z-4' : ''}>
				<Header />
			</header>
			<Routes>
				<Route path='/*' element={<PageRoute />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
