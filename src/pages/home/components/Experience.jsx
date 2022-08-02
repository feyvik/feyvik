/** @format */

import React, { useEffect } from 'react';
import style from '../style/Experience.module.css';
import Styled from 'styled-components';
import WOW from 'wowjs';

const StyledHeader = Styled.h2`
  color: #073eaa;
`;

function Experience() {
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);
	return (
		<div className='w-full mt-4 experience'>
			<div
				className='w-full wow animate__animated animate__fadeIn'
				data-wow-delay='0.2s'>
				<StyledHeader>Experiences</StyledHeader>
			</div>
			<div className='row m-0'>
				<div className={`${style.col}`}>
					<div className={`${style.timeline}`}>
						<div
							className={`${style.timeline__content} ${style.right}  wow animate__animated animate__fadeInRight`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										OpenRepay, Freelance — Technical Writer
									</h4>
									<p className={`${style.exp__date}`}>JUNE 2022 - PRESENT</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Write technical articles on web technologies
										</li>
										<li className='mb-2'>
											<p>Author page:</p>
											<a href='https://blog.openreplay.com/authors/favour-vivian-woka'>
												https://blog.openreplay.com/authors/favour-vivian-woka
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.left} wow animate__animated animate__fadeInLeft`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										KodeCamp, Remote — React Tutor and Team Lead
									</h4>
									<p className={`${style.exp__date}`}>APRIL 2022 - PRESENT</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Created and maintained a welcoming, friendly, engaging,
											classroom environment where all students felt comfortable
										</li>
										<li className='mb-2'>
											Graded project on different stages using airtable
										</li>
										<li className='mb-2'>
											Instruct students on different project
										</li>
										<li className='mb-2'>
											Lead two different teams on in-house projects
										</li>
										<li className='mb-2'>
											Analyzed individual team member personal data to pinpoint
											weaknesses, then schedule one-on-one training sessions to
											address possible factors and improve performance.
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.right}  wow animate__animated animate__fadeInRight`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										HouseAfrica, Remote — Frontend Developer
									</h4>
									<p className={`${style.exp__date}`}>
										AUGUST 2021 - APRIL 2022
									</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Built responsive in-house applications for the company
											using Angular, Angular Material Design, and Bootstrap
										</li>
										<li className='mb-2'>
											Refactor existing code base to improve performance and
											code structure
										</li>
										<li className='mb-2'>
											Collaborating with the product team to ensure that designs
											are efficient and technical sounds
										</li>
										<li className='mb-2'>
											Performing Bug fixes and code review before deploying to
											production
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.left} wow animate__animated animate__fadeInLeft`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										Marbl, Freelancing — Frontend Developer Freelancing
									</h4>
									<p className={`${style.exp__date}`}>
										MARCH 2021 - AUGUST 2021
									</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											<p>
												I am in charge of documenting and implematation of all
												ui mockup
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.right}  wow animate__animated animate__fadeInRight`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										LogRocket, Freelance — Technical Writer
									</h4>
									<p className={`${style.exp__date}`}>JANUARY 2021 - Present</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Write technical articles on web technologies
										</li>
										<li className='mb-2'>
											<p>Author page:</p>
											<a href='https://blog.logrocket.com/author/favourvivianwoka/'>
												https://blog.logrocket.com/author/favourvivianwoka/
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.left} wow animate__animated animate__fadeInLeft`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										CodeSource, Freelance — Technical Writer
									</h4>
									<p className={`${style.exp__date}`}>
										MARCH 2020 - MARCH 2022
									</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Write technical articles on web technologies
										</li>
										<li className='mb-2'>
											<p>Author page:</p>
											<a href='https://codesource.io/author/favour/'>
												https://codesource.io/author/favour/
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.right}  wow animate__animated animate__fadeInRight`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										HelixGade, Remote — Frontend Engineer
									</h4>
									<p className={`${style.exp__date}`}>
										JUNE 2020 - AUGUST 2021
									</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											Working mostly as a frontend developer,
										</li>
										<li className='mb-2'>
											Built frontend user interface with Angular, React.js
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div
							className={`${style.timeline__content} ${style.left} wow animate__animated animate__fadeInLeft`}
							data-wow-delay='0.2s'>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h4 className={`${style.exp_header}`}>
										PrimedSoft, Internship — Frontend Engineer
									</h4>
									<p className={`${style.exp__date}`}>
										JANUARY 2019 - DECEMBER 2020
									</p>
									<ul className={`${style.exp__list}`}>
										<li className='mb-2'>
											learnt HTML, CSS, JavaScript, Bootstrap, and Angular
										</li>
										<li className='mb-2'>
											Built responsive user interface using HTML, CSS,
											Bootstrap, and JavaScript
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
