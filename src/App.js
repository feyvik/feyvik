/** @format */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import PageRoute from './router/PageRoute';
import Footer from './components/footer/Footer';
function App() {
	return (
		<main>
			<header className='mb-4'>
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
