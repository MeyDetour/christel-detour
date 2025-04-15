import "./activity.css"

import Img from './../../components/Img';
import HorizontalSeparator from "../../components/HorizontalSeparator.jsx";

export const Activity = () => {
    return (
        <>
            <h1>Mon activité</h1>
            <section>
                <article className={"article1"}>
                    <h3>Mon rôle en tant qu’assistante maternelle</h3>
                    <ul className={"flexCol"}>
                        <li className={"md-text"}>Identifier les besoins de votre enfant et y répondre.</li>
                        <li className={"md-text"}>Respecter son rythme et son évolution.</li>
                        <li className={"md-text"}>Veiller à son confort et à sa sécurité physique et psychique : je le
                            rassure, le protège.
                        </li>
                        <li className={"md-text"}>L’accompagner dans ses activités quotidiennes, le valoriser, lui donne
                            confiance en lui en
                            lui.
                        </li>
                        <li className={"md-text"}>Proposer des activités adaptées pour ne pas le mettre en situation
                            d’échec.
                        </li>
                        <li className={"md-text"}>Proposer à l’enfant des moments privilégiés : le jeu, les activités
                            diverses, les moments de
                            repos et de repas adaptés à son rythme.
                        </li>
                        <li className={"md-text"}>Accompagner son éveil, son épanouissement, sa socialisation et son
                            autonomie.
                        </li>
                        <li className={"md-text"}>Respecter vos attentes : pour ce faire je travaille en collaboration
                            avec vous en
                            privilégiant le dialogue afin de nous permettre la construction d’une relation de confiance.
                        </li>

                    </ul>
                </article>

                <article className={"article2"}>
                    <HorizontalSeparator text="Développement"/>

                    <div className="line1 ">
                        <div className={"blue"}>
                            <span class={"md-bold-text"}>Les règles et les limites</span>
                            <p className={"md-text"}>Un enfant a besoin de repères. Les limites lui permettent de se
                                construire. Chez l’assistante Maternelle, il y a des règles de vie à respecter : (on ne
                                se tape pas, on respecte l’autre, on écoute l’autre, on dit « s’il te plaît », « merci
                                », etc)</p>
                        </div>

                        <div className={"orange"}>
                            <span class={"md-bold-text"}>L’hygiène et la sécurité</span>
                            <p className={"md-text"}>Je veille à la bonne hygiène de votre enfant (change, lavage des
                                mains, préparation des repas …) ainsi que de l’environnement (ménage quotidien des lieux
                                et nettoyage des jouets...).
                            </p>
                        </div>

                    </div>
                    <div className="line2">
                        <div className={"violet"}>
                            <span className={"md-bold-text"}>La socialisation</span>
                            <p className={"md-text"}>Je travaille en équipe avec l’Association des Assistantes
                                Maternelles Les Pioupious des nounous qui propose des activités collectives manuelles et
                                de motricité (sortie ludique, ludothèque).

                            </p>
                        </div>
                        <div className={"red"}>
                            <span className={"md-bold-text"}>L’autonomie</span>
                            <p className={"md-text"}>Je l’accompagne dans tous les actes de la vie quotidienne mais je
                                n’interviens pas automatiquement (je le soutiens, le stimule et l’encourage).</p>
                        </div>
                        <div className={"green"}>
                            <span className={"md-bold-text"}>L’épanouissement</span>
                            <p className={"md-text"}>Je lui propose diverses activités variées et adaptées. Elles
                                doivent être variées pour lui permettre de s’éveiller et adaptées afin de respecter ses aptitudes.
                            </p>
                        </div>
                    </div>
                </article>


                <article className={"article3"}>

                    <HorizontalSeparator text="Lieu d'accueil"/>
                    <div>

                        <Img src="/images/garden.png" alt="image du jardin"/>
                        <div>
                            <h3>Mon lieu de travail et aussi mon lieu de vie</h3>
                            <p className={"md-text"}>J’habite et accueille votre enfant dans une maison avec 4 chambres,
                                une salle de jeux et un jardin. Ce lieu a été visité par la puéricultrice et selon ses
                                recommandations, certains aménagements ont été effectués afin d’assurer la sécurité des
                                enfants accueillis.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className={"md-text"}>Jardin : un espace jeu extérieur où les enfants pourront avoir des
                                activités plus physiques, des activités de motricité... (vélos, trottinettes,
                                poussettes, cabane, tunnel...).</p>
                            <p className={"md-text"}>Des chambres : Un espace repos dans lequel chaque enfant a son lit
                                et pourra faire la sieste dans le respect de ses habitudes et de son rythme.</p>
                            <p className={"md-text"}>Une salle de jeu : Un espace jeu dans lequel chaque enfant pourra
                                s’adonner à ses activités préférées avec des jouets adaptés à son âge et à son
                                développement psychomoteur, et ce, toujours dans la bienveillance. </p>
                        </div>
                        <div>
                            <Img src="/images/accueil-1.png" alt="image d'enfant"/>
                            <Img src="/images/accueil-2.png" alt="image d'enfant"/>
                            <Img src="/images/accueil-3.png" alt="image d'enfant"/>
                            <Img src="/images/accueil-4.png" alt="image d'enfant"/>
                            <Img src="/images/accueil-5.png" alt="image d'enfant"/>
                            <Img src="/images/accueil-6.png" alt="image d'enfant"/>
                        </div>
                    </div>

                </article>
                <article className={"article4"}>

                    <HorizontalSeparator text="Enfants, Horaires, Transport"/>
                    <div>
                        <p className={"md-text"}>J’accueille les enfants de 2 mois 1/2 jusqu’à 3 ans, de 7h15 à 18h30,
                            du lundi au vendredi en temps plein. Je veille à effectuer un accueil harmonieux et prévenant avec chaque
                            enfant.
                        </p>
                        <p className={"md-text"}>J’ai un agrément pour quatre enfants, tout âge. Les trajets pour
                            les périscolaires : nous faisons les trajets soit à pied, soit en voiture: j’habite à 900
                            mètres de l’école de Simandres. Nous ne pouvons pas faire 8 allers – retours et nous devons
                            tenir compte aussi de la météo.</p>

                        <p className={"md-text"}>
                            Je privilégie aussi le rythme des plus petits et je ne prévois de faire les trajets que de 8h20 et de 11h20. (pas de trajet l'après-midi)
                            Je suis donc véhiculée et ai le matériel en adéquation avec l’âge de votre enfant
                            pour que le trajet soit réalisé en toute sécurité.</p>
                    </div>
                </article>
            </section>

            {/* footer */}
        </>
    )
}
