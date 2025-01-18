const Footer = () => {
	return (
		<footer className="flexCol">
			<div className="flexRow">
				<div>
					<h5>DETOUR Christel</h5>
					<h6>Assistante maternelle</h6>
				</div>
				<ul className="sm-text">
					<li>
						<a href="/">
							Présentation
						</a>
					</li>
					<li>
						<a href="/activite">
							Mon activité
						</a>
					</li>
					<li>
						<a href="/animations">
							Animations
						</a>
					</li>
					<li>
						<a href="/contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="flexRow sm-text contacts">
				<div>
					<img src="icons/mail.svg" className="icon" />
					<span>christel.detour@gmail.com</span>
				</div>
				<div>
					<img src="icons/map.svg" className="icon" />
					<span>Simandres 69360 à 20km de Lyon</span>

				</div>
				<div>
					<img src="icons/bookmark.svg" className="icon" />
					<span>Télécharger mon projet d’accueil</span>

				</div>
			</div>
			<hr/>
			<p>© Copyrights, 2024</p>
		</footer>
	);
}

export { Footer };
