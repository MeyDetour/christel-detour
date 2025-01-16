import {LocationProvider, Router, Route, hydrate, prerender as ssr} from 'preact-iso';
import {Home} from './pages/home/Home.jsx';
import {NotFound} from './pages/_404.jsx';
import {Activity} from "./pages/activity/acitivty.jsx";
import {Header} from "./components/Header.jsx";
import "./style.css"
import {Animations} from "./pages/animations/animations.jsx";
import {Contact} from "./pages/contact/contact.jsx";
import {Procedure} from "./pages/procedure/procedure.jsx";
export const App = () => {
    return (
        <LocationProvider>
            <Header />
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/activite" component={Activity} />
                    <Route path="/procedure" component={Procedure} />
                    <Route path="/animations" component={Animations} />
                    <Route path="/contact" component={Contact} />
                    <Route default component={NotFound} />
                </Router>
        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.querySelector('body'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
