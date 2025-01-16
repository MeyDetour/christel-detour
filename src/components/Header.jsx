import { useLocation } from 'preact-iso';

export const Header = () => {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a class={"md-text"} href="/">
							Home
						</a>
					</li>
					<li>
						<div className={"point"} />
					</li>
					<li>
						<a class={"md-text"}  href="/404">
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
