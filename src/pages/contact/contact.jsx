import "./contact.css"

export const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <section>
                <article className="flexRowBetween">

                    {/* left */}
                    <div className="flexCol profile">
                        <img src="/images/profile-picture.png" alt="image Christel Detour"/>

                        <a href="" download>Téléchargez mon projet <span>d’accueil
                            <img className="icon" src="./icons/link.svg" alt="Download project" />
                            </span>
                        </a>
                    </div>

                    {/* right */}
                    <div className="flexCol info">
                        {/* email */}
                        <div className="flexRow">
                            <img className="icon" src="./icons/mail.svg" alt="My email" />
                            <p className={"md-text"}>christel.detour@gmail.com</p>
                        </div>

                        {/* map */}
                        <div className="flexRow">
                            <img className="icon" src="./icons/map.svg" alt="My location" />
                            <p className={"md-text"}>Simandres 69360 à 20km de Lyon</p>
                        </div>

                        {/* horloge */}
                        <div className="flexRow">
                            <img className="icon" src="./icons/clock.svg" alt="My availability" />
                            <p className={"md-text"}>Vous pouvez me contacter de 8h à 18h en semaine</p>
                        </div>
                    </div>
                </article>
            </section>

            {/* footer */}
        </>
    )
}