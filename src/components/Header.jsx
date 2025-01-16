import { useLocation } from 'preact-iso';

export const Header = () => {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a class={"md-text"} href="/" className={url == '/' && 'active'}>
							Home
						</a>
					</li>
					<li>
						<div className={"point"} />
					</li>
					<li>
						<a class={"md-text"}  href="/activity" className={url == '/activity' && 'active'}>
							Activity
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
