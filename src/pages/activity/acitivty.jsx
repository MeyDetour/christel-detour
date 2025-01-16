import "./activity.css"

export const Activity = () => {
    return (
        <>
            <h3>Mon activité</h3>
            <section>
                <article>
                    <h3>Mon rôle en tant qu’assistante maternelle</h3>
                    <ul>
                        <li>Identifier les besoins de votre enfant et y répondre.</li>
                        <li>Respecter son rythme et son évolution.</li>
                        <li>Veiller à son confort et à sa sécurité physique et psychique : je le rassure, le protège.
                        </li>
                        <li>L’accompagner dans ses activités quotidiennes, le valoriser, lui donne confiance en lui en
                            lui.
                        </li>
                        <li>Proposer des activités adaptées pour ne pas le mettre en situation d’échec.
                        </li>
                        <li>Proposer à l’enfant des moments privilégiés : le jeu, les activités diverses, les moments de
                            repos et de repas adaptés à son rythme.
                        </li>
                        <li>Accompagner son éveil, son épanouissement, sa socialisation et son autonomie.
                        </li>
                        <li>Respecter vos attentes : pour se faire je travaille en collaboration avec vous en
                            privilégiant le dialogue afin de nous permettre la construction d’une relation de confiance.
                        </li>

                    </ul>
                </article>

                <article>

                    {/* hr */}

                    <div className="line1">
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
                        <div className={"rose"}>
                            <span className={"md-bold-text"}>La socialisation</span>
                            <p className={"md-text"}>Je travaille en équipe avec l’Association des Assistantes
                                Maternelle Les Pioupious des nounous qui propose des activités collectives manuelles et
                                de motricité. Cette activité peut m’amener, avec votre accord, à me déplacer dans
                                d’autres lieux avec votre enfant (sortie ludique, ludothèque, bibliothèque...).
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
                <article>

                </article>

            </section>
        </>
    )
}