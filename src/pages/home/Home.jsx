import HorizontalSeparator from './../../components/HorizontalSeparator';
import './style.css';

export const Home = () => {
	return (
		<>
			<section>
				
			</section>
			<section>
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
