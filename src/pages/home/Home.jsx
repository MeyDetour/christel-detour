import { motion } from 'framer-motion';

import HorizontalSeparator from './../../components/HorizontalSeparator';

import './style.css';

export const Home = () => {
	return (
		<>
			<section className="top">
				<svg className="pinkRound" viewBox="0 0 715 543" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M91.3017 75.2794C113.257 58.5615 138.027 45.9079 164.44 37.9174L251.053 11.715C285.292 1.35709 321.343 -1.59284 356.811 3.06141L519.364 24.3929C631.015 39.0445 714.5 134.201 714.5 246.809V246.809C714.5 284.018 705.244 320.643 687.566 353.384L643.5 435L632.032 451.71C569.533 542.78 447.162 569.857 352.076 513.656L263.143 461.091C236.888 445.573 203.591 448.941 180.976 469.402V469.402C150.635 496.854 103.278 492.361 78.6413 459.693L46.0791 416.516C38.0827 405.914 31.9159 394.048 27.8339 381.41L11.3407 330.349C-18.8209 236.972 13.2317 134.727 91.3017 75.2794V75.2794Z" fill="#F9D6FF"/>
				</svg>

				<svg className="line" viewBox="0 0 1920 477" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1988 251.143C1988 251.143 1805 324.857 1670 292.939C1535 261.022 1632.5 35.6998 1419 3.78225C1205.5 -28.1353 1019.49 222.645 1101 341.955C1182.5 461.266 1348.5 414.53 1405 341.955C1461.5 269.381 1448.5 186.928 1270 123.853C1091.5 60.7777 805.494 -0.777201 625.492 3.78225C445.489 8.3417 324.493 70.2769 149.99 341.955C-24.5119 613.634 -209.011 385.652 -137.01 401.231" stroke="#0E0E0E"/>
				</svg>

				<div className="flexCol title">
					<motion.h1
						style={{overflow: "hidden", whiteSpace: "nowrap"}}
						initial={{width: 0}}
						animate={{width: "100%"}}
						transition={{duration: 1.5, ease: "easeInOut"}}
					>
						DETOUR Christel
					</motion.h1>
					<motion.h2
						style={{overflow: "hidden", whiteSpace: "nowrap"}}
						initial={{width: 0}}
						animate={{width: "100%"}}
						transition={{duration: 1.5, delay: 1, ease: "easeInOut"}}
					>
						Assistante maternelle
					</motion.h2>
				</div>

				<div className="flexRow homeBoxes">
					<motion.div 
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
						transition={{duration: .6, delay: 1.5 + 1, ease: "easeInOut"}}
						className="flexCol"
					>
						<p className="md-text">Faites défiller l’écran<br/>pour mieux me connaître.</p>
						<img src="./icons/mouse.svg" alt="Scroll down" />
						<img src="./icons/small-down-arrow.svg" alt="Scroll down" />
					</motion.div>
					<motion.div 
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
						transition={{duration: 1.2, delay: 2 + 1, ease: "easeInOut"}}
						className="flexRow"
					>
						<h3 >Apprenez à me connaître</h3>
						<div className="flexCol">
							<p className="md-text">Qui-suis je ?</p>
							<p className="md-text">Mes formations</p>
						</div>
					</motion.div>
					<motion.div 
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
						transition={{duration: .6, delay: 1 + 1, ease: "easeInOut"}}
						className="flexRow"
					>
						<h3 >Mon activité</h3>
						<div className="flexCol">
							<p className="md-text">Mon rôle</p>
							<p className="md-text">Accompagnement</p>
							<p className="md-text">Lieu d’accueil</p>
							<p className="md-text">Organisation</p>
						</div>
					</motion.div>
				</div>
			</section>
			<section className="bottom">
				<article>
					<HorizontalSeparator text="Qui suis-je ?"/>
					<div className="flexRowAround content">
						<p className="md-text">Je me présente, je me nomme Christel Detour, j'ai 52 ans et je suis Assistante Maternelle agréée par le Conseil Général du Rhône depuis 2008.<br/><br/>J’ai fait des études de comptabilité et j’ai travaillé 14 ans en tant que chef de service au siège d’un grand groupe de vente d’électroménager, de téléphonie, de matériel informatique et audiovisuel.</p>
						<img src="./images/profile-picture.png" alt="Photo de profile" />
					</div>
				</article>
				<article className="second-article">
					<HorizontalSeparator text="Formations"/>
					<div className="flexRowAround content">
						<div>
							<div className="flexRow">
								<h4>01</h4>
								<p className="sm-text">
									<span className="md-text">Alimentation d’un jeune enfant</span><br/>
									Une alimentation saine et équilibrée, dès le plus jeune âge, contribue à la bonne santé des enfants. Entre 4 mois et trois ans, c’est la découverte de nouveaux goûts, de nouvelles saveurs et textures.
									</p>
							</div>
							<div className="flexRow">
								<h4>02</h4>
								<p className="sm-text">
									<span className="md-text">L'éveil corporel</span><br/>
									En s’appropriant très vite son corps par le mouvement, en explorant soi-même et son environnement, en découvrant par le geste des contrées imaginaires, le jeune enfant gagne en confiance. 
								</p>
							</div>
							<div className="flexRow">
								<h4>03</h4>
								<p className="sm-text">
									<span className="md-text">Formation Sauveteur Secouriste du Travail (SST)</span><br/>
									Les émotions chez le jeune enfant sont des manifestations spontanées et variées qui participent à son développement. L’enfant exprime d’abord des émotions primaires, comme la joie, la tristesse, la colère, la peur le dégoût et la surprise, qui apparaissent au cours de la première année de vie.
								</p>
							</div>
							<div className="flexRow">
								<h4>04</h4>
								<p className="sm-text">
									<span className="md-text">L’éveil musical</span><br/>
									La psychomotricité est la relation entre la perception, la sensibilité, le savoir, et la motricité d’un enfant. Elle permet à l’enfant de s’intégrer au niveau social, de favoriser le jeu en groupe, et d’affronter certaines peurs. Elle est aussi la fenêtre vers le monde de l’enfant dans ses fonctions symboliques, comportementales, cognitives, et langagières.
								</p>
							</div>
						</div>
						<div>
							<div className="flexRow">
								<h4>05</h4>
								<p className="sm-text">
									<span className="md-text">Psychomotricité</span><br/>
									La musique a un effet positif sur bébé. Elle l’apaise et lui apprend à grandir. L’éveil musical pour bébé lui permet de développer des capacités d’écoute, et de concentration. Son ouïe s’affine et bébé est bientôt capable de distinguer les différentes nuances d’un morceau musical et de danser en rythme.
								</p>
							</div>
							<div className="flexRow">
								<h4>06</h4>
								<p className="sm-text">
									<span className="md-text">Les émotions chez le jeune enfant</span><br/>
									Intervenir face à une situation d’accident, protéger de façon adaptée, examiner la situation. Garantir une alerte favorisant l’arrivée de secours. Secourir la victime de manière appropriée
								</p>
							</div>
							<div className="flexRow">
								<h4>07</h4>
								<p className="sm-text">
									<span className="md-text">Baby Yoga</span><br/>
									En s’appropriant très vite son corps par le mouvement, en explorant soi-même et son environnement, en découvrant par le geste des contrées imaginaires, le jeune enfant gagne en confiance. 
								</p>
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
