import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/home/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export const App = () => {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.querySelector('body'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
