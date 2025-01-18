import {LocationProvider, Router, Route, hydrate, prerender as ssr} from 'preact-iso';

import { Header } from "./components/Header.jsx";
import { Home } from './pages/home/Home.jsx';
import { Activity } from "./pages/activity/acitivty.jsx";

import {Animations} from "./pages/animations/animations.jsx";
import {Contact} from "./pages/contact/contact.jsx";
import {Procedure} from "./pages/procedure/procedure.jsx";
import { Footer } from "./components/Footer.jsx";

import { NotFound } from './pages/_404.jsx';

import "./style.css"
import NavigationMenu from "./components/navigationMenu.js";

export const App = () => {
    return (
        <LocationProvider>
            <Header />
            {window.innerWidth <= 600 &&  <NavigationMenu />}
            <Router>
                <Route path="/" component={Home} />
                <Route path="/activite" component={Activity} />
                <Route path="/procedure" component={Procedure} />
                <Route path="/animations" component={Animations} />
                <Route path="/contact" component={Contact} />
                <Route default component={NotFound} />
            </Router>
            <Footer />

        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.querySelector('body'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
