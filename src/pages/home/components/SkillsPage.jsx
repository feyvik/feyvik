/** @format */
import React from 'react';
import Styled from 'styled-components';
import Skill from './Skill';
import Interest from './Interest';

const StyledSection = Styled.section`
	min-height:40vh;
`;

function SkillsPage() {
	return (
		<StyledSection className='flex lg:flex-row flex-column'>
			<Skill />
			<Interest />
		</StyledSection>
	);
}

export default SkillsPage;
