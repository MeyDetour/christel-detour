import { useLocation } from 'preact-iso';

export const Header = () => {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a  href="/" className={ `md-text  ${ url === '/' && 'active'}`}>
							Home
						</a>
					</li>
					<li>
						<div className={"point"} />
					</li>
					<li>
						<a href="/activite" className={ `md-text  ${ url === '/activite' && 'active'}`}>
							Activité
						</a>
					</li>
					<li>
						<div className={"point"} />
					</li>
				</ul>


			</nav>
		</header>
	);
}
