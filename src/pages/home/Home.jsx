/** @format */

import React from 'react';
import './style/Home.css';
import SkillsPage from './components/SkillsPage';
import Work from './components/Work';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Hero from './components/Hero';

function Home() {
	return (
		<section>
			<Hero />
			<SkillsPage />
			<Work />
			<Experience />
			<Blog />
		</section>
	);
}

export default Home;
