/** @format */

import React from 'react';
import './style/Home.css';
import SkillsPage from './components/SkillsPage';

import Hero from './components/Hero';

function Home() {
	return (
		<section>
			<Hero />
			<SkillsPage />
		</section>
	);
}

export default Home;
