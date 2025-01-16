import "./animations.css"

export const Animations = () => {
    return (
        <>
            <h1>Animations</h1>
            <section>
                <img src="/images/animation-1.png" alt="image d'une animation"/>
                <img src="/images/animation-2.png" alt="image d'une animation"/>
                <img src="/images/animation-3.png" alt="image d'une animation"/>
                <img src="/images/animation-4.png" alt="image d'une animation"/>
                <img src="/images/animation-5.png" alt="image d'une animation"/>
                <img src="/images/animation-6.png" alt="image d'une animation"/>
                <img src="/images/animation-7.png" alt="image d'une animation"/>
                <img src="/images/animation-8.png" alt="image d'une animation"/>

                <article className={"article1"}>
                    <h3>Activités</h3>
                    <p className={"md-text"}>J’organise de nombreuses activités aux côtés des enfants, autour de thèmes
                        variés tels que les
                        saisons, les animaux, ou encore des fêtes comme la Fête des Mères, la Fête des Pères, Noël et
                        Pâques. Ces ateliers permettent aux enfants de créer des objets pratiques tout en offrant une
                        belle occasion de confectionner des cadeaux uniques pour leurs parents. Ces activités visent à
                        développer leur motricité fine, stimuler leur créativité et nourrir leur imagination. En
                        parallèle, elles facilitent l’apprentissage grâce à une approche multisensorielle qui enrichit
                        leur développement global.</p>
                </article>


                <article className={"article2"}>
                    <h3>Animations et sorties</h3>
                    <p className={"md-text"}>Nous proposons régulièrement des sorties en extérieur, comme des balades au
                        parc ou des explorations en pleine nature. Ces moments favorisent la découverte du monde naturel
                        tout en permettant aux enfants de se libérer, de courir et de s’ouvrir au monde. Les sorties en
                        plein air stimulent leurs sens, renforcent leur santé physique et les connectent à leur
                        environnement. Nous organisons également des sorties à thème, souvent en partenariat avec des
                        associations telles que "Les Pioupious des Nounous", pour offrir aux enfants des expériences
                        enrichissantes et amusantes qui allient nature, apprentissage et convivialité.</p>
                </article>


            </section>

            {/* footer */}
        </>
    )
}