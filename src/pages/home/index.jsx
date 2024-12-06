import './style.css';

import { HR } from './../../components/HR.jsx';
import { Button } from './../../components/Button.jsx';

export function Home() {
	return (
		<>
			<section className="onScreen flexColBetween">
				<div className="sup">

				</div>
				<div className="sub flexRow">
					<div className="flexCol">
						<p>Faites défiller l’écran<br/>pour mieux me connaître</p>
						<img src="pictures/icons/mouse.svg" alt="Scroll to see more"/>
						<img src="pictures/icons/downArrow.svg" alt="Scroll to see more"/>
					</div>
					<div className="flexCol">
						<div className="flexRowBetween">
							<h3>Votre enfant</h3>
							<img src="pictures/icons/link.svg" alt="Link"/>
						</div>

						<p style={{marginLeft: "50%"}}>Les activités</p>
						<p style={{marginLeft: "20%"}}>Les animations</p>
					</div>
					<div className="flexCol">
						<div className="flexRowBetween">
							<h3>Processus</h3>
							<img src="pictures/icons/link.svg" alt="Link"/>
						</div>

						<p style={{marginLeft: "40%"}}>Le fonctionnement</p>
						<p style={{marginLeft: "20%"}}>Les tarifs</p>
						<p style={{marginLeft: "50%"}}>Une famille heureuse</p>
					</div>
				</div>
			</section>

			<HR>Qui suis-je ?</HR>
			<Button>Component</Button>
		</>
	);
}