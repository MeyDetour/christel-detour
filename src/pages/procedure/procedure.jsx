import "./procedure.css"

export const Procedure = () => {
	return (
		<>
			<h1>Procédure</h1>

			<section className="top">
				<article>
					<div className="flexRowBetween">
						<p className="md-text">En tant qu’assistante maternelle agréée depuis 2008, je suis passionnée par mon métier et je m'efforce de créer un environnement de confiance et de bien-être pour les enfants. J'accueille des enfants de 2 mois et demi jusqu'à leur entrée à l'école dans une ambiance familiale, chaleureuse et sécurisante.</p>
						<p className="md-text">Mon expérience me permet de proposer des activités variées et adaptées à chaque âge, tout en respectant le rythme et les besoins de chaque enfant. J'accorde une grande importance à la communication avec les parents pour assurer une collaboration harmonieuse et un suivi personnalisé de chaque enfant.</p>
					</div>
				</article>
			</section>
			<section className="bottom">
				<article>
					<ul>
						<li>
							<h3>Prise de contact</h3>
							<p className="md-text">Un premier contact par téléphone ou email permet de discuter des besoins de votre enfant et des horaires.</p>
						</li>
						<li>
							<h3>Rencontre et Visite</h3>
							<p className="md-text">Une visite de mon domicile permet de vous familiariser avec l'environnement et discuter de vos attentes.</p>
						</li>
						<li>
							<h3>Discussion des Modalités</h3>
							<p className="md-text">Horaires (7h30)<br/>Activités proposées<br/>Tarifs horaires (entre 4€ et 5,80€) sont définis et discutés</p>
						</li>
						<li>
							<h3>Rédaction et Signature du Contrat</h3>
							<p className="md-text">Un contrat détaillé est rédigé pour officialiser notre collaboration, incluant horaires, tarifs, et engagements réciproques.</p>
						</li>
						<li>
							<h3>Cahier de Liaison</h3>
							<p className="md-text">Un cahier de liaison est mis en place dès le premier jour pour faciliter les échanges sur l’évolution de votre enfant.</p>
						</li>
					</ul>
				</article>
			</section>
		</>
	)
}