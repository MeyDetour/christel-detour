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
						<a href="/404">
							Mon activité
						</a>
					</li>
					<li>
						<a href="/404">
							Animation
						</a>
					</li>
					<li>
						<a href="/404">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="flexRow sm-text contacts">
				<p>
					<img src="./icons/mail.svg" className="icon" />
					christel.detour@gmail.com
				</p>
				<p>
					<img src="./icons/map.svg" className="icon" />
					Simandres 69360 à 20km de Lyon
				</p>
				<p>
					<img src="./icons/bookmark.svg" className="icon" />
					Télécharger mon projet d’accueil
				</p>
			</div>
			<hr/>
			<p>© Copyrights, 2024</p>
		</footer>
	);
}

export { Footer };
