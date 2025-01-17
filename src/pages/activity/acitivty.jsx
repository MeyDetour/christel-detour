import "./activity.css"
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
                        <li className={"md-text"}>Respecter vos attentes : pour se faire je travaille en collaboration
                            avec vous en
                            privilégiant le dialogue afin de nous permettre la construction d’une relation de confiance.
                        </li>

                    </ul>
                </article>

                <article className={"article2"}>
                    <HorizontalSeparator text="Développement" />

                    <div className="line1 ">
                        <div className={"blue"}>
                            <span class={"md-bold-text"}>Les règles et les limites</span>
                            <p className={"md-text"}>Un enfant a besoin de repères. Les limites lui permettent de se
                                construire. Chez l’assistante Maternelle il y a des règles de vie à respecter : (on ne
                                se tape pas, on respecte l’autre, on écoute l’autre, on dit « s’il te plait », « merci
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
                            <p className={"md-text"}>Je travaille en équipe avec l’Association des Assistantes Maternelle Les Pioupious des nounous qui propose des activités collectives manuelles et de motricité  (sortie ludique, ludothèque, bibliothèque...).

                            </p>
                        </div>
                        <div className={"red"}>
                            <span className={"md-bold-text"}>L’autonomie</span>
                            <p className={"md-text"}>Je l’accompagne dans tous les actes de la vie quotidienne mais je
                                n’nterviens pas automatiquement (je le soutiens, le stimule et l’encourage).</p>
                        </div>
                        <div className={"green"}>
                            <span className={"md-bold-text"}>L’épanouissement</span>
                            <p className={"md-text"}>Je lui propose diverses activités variées et adaptées. Elles
                                doivent être
                                variées pour lui permettre de s’éveiller et adaptées afin de respecter ses aptitudes (ne
                                pas le mettre
                                en échec).
                            </p>
                        </div>
                    </div>
                </article>


                <article className={"article3"}>

                    <HorizontalSeparator text="Lieu d'accueil"/>
                    <div>

                        <img src="/images/garden.png" alt="image du jardin"/>
                        <div>
                            <h3>Mon lieu de travail et aussi mon lieu de vie</h3>
                            <p className={"md-text"}>J’habite et accueille votre enfant dans une maison avec 4 chambres,
                                une salle de jeux et un jardin.Ce lieu a été visité par la puéricultrice et selon ses
                                recommandations, certains aménagements ont été effectués afin d’assurer la sécurité des
                                enfants accueillis.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className={"md-text"}>Jardin : un espace jeu extérieur où les enfants pourront avoir des
                                activités plus physiques, des activités de motricité... (Vélos, trottinettes,
                                poussettes, cabane, tunnel...)</p>
                            <p className={"md-text"}>Des chambres : Un espace repos dans lequel chaque enfant a son lit
                                et pourra faire la sieste dans le respect de ses habitudes et de son rythme.</p>
                            <p className={"md-text"}>Une salle de jeu : Un espace jeu dans lequel chaque enfant pourra
                                s’adonner à ses activités préférées avec des jouets adaptés à son âge et à son
                                développement psychomoteur, et ce, toujours dans la bienveillance. </p>
                        </div>
                        <div>
                            <img src="/images/accueil-1.png" alt="image d'enfant"/>
                            <img src="/images/accueil-2.png" alt="image d'enfant"/>
                            <img src="/images/accueil-3.png" alt="image d'enfant"/>
                            <img src="/images/accueil-4.png" alt="image d'enfant"/>
                            <img src="/images/accueil-5.png" alt="image d'enfant"/>
                            <img src="/images/accueil-6.png" alt="image d'enfant"/>
                        </div>
                    </div>

                </article>
                <article className={"article4"}>

                    <HorizontalSeparator text="Enfants, Horaires, Transport"/>
                    <div>
                        <p className={"md-text"}>J’accueille les enfants de 2 mois 1/2 jusqu’à 4 ; à leur rentrée
                            scolaire, de 7h15 à 18h30 voire 19h00, du lundi au vendredi en temps partiel ou temps plein,
                            avec planning annuel. Je veille à effectuer un accueil harmonieux et prévenant avec chaque
                            enfant.
                        </p>
                        <p className={"md-text"}>J’ai un agrément pour quatre enfants, quatre tout âge. Les trajets pour
                            les périscolaire : selon la commune ou je travaille, nous faisons les trajets soit à pied,
                            soit en voiture: j’habite à 900 mètres de l’école de Simandres.</p>
                        <p className={"md-text"}>Je ne peux pas faire tous les trajets à pied car avec des petites
                            jambes, nous ne pouvons pas faire 8 allers – retours et nous devons tenir compte de la
                            météo. Je suis donc véhiculée et ai le matériel en adéquation avec l’âge de votre enfant
                            pour que le trajet soit réalisé en toute sécurité. Et il m’arrive de travailler sur une
                            école aux alentours de ma commune selon mes gardes.</p>
                    </div>
                </article>
            </section>

            {/* footer */}
        </>
    )
}