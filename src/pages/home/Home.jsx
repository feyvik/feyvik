/** @format */

import React from 'react';
import './style/Home.css';
import SkillsPage from './components/SkillsPage';
import Work from './components/Work';

import Hero from './components/Hero';

function Home() {
	return (
		<section>
			<Hero />
			<SkillsPage />
			<Work />
		</section>
	);
}

export default Home;
