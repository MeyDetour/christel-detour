import "./contact.css"

import Img from './../../components/Img';
import HorizontalSeparator from "../../components/HorizontalSeparator.jsx";
import RecommandationCard from "../../components/RecommandationCard.jsx";

export const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <section>
                <article className="flexRowBetween">

                    {/* left */}
                    <div className="flexCol profile">
                        <Img src="/images/profile-picture.png" alt="image Christel Detour"/>

                        <a href="Projet d'accueil Christel Detour.pdf" download   target="_blank" rel="noopener" className={"md-text"}  >Téléchargez mon projet <span className={"md-text"}>d’accueil
                                <svg className={"downloadSvg"} width="18" height="18" viewBox="0 0 32 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2 16C2 19.713 3.475 23.274 6.1005 25.8995C8.72601 28.525 12.287 30 16 30C19.713 30 23.274 28.525 25.8995 25.8995C28.525 23.274 30 19.713 30 16C30 12.287 28.525 8.72601 25.8995 6.1005C23.274 3.475 19.713 2 16 2C12.287 2 8.72601 3.475 6.1005 6.1005C3.475 8.72601 2 12.287 2 16ZM32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16ZM11.708 21.606C11.5205 21.7938 11.2661 21.8994 11.0007 21.8996C10.7353 21.8997 10.4808 21.7945 10.293 21.607C10.1052 21.4195 9.99963 21.1651 9.99944 20.8997C9.99926 20.6343 10.1045 20.3798 10.292 20.192L18.486 12H12.95C12.6848 12 12.4304 11.8946 12.2429 11.7071C12.0554 11.5196 11.95 11.2652 11.95 11C11.95 10.7348 12.0554 10.4804 12.2429 10.2929C12.4304 10.1054 12.6848 10 12.95 10H20.9C21.1652 10 21.4196 10.1054 21.6071 10.2929C21.7946 10.4804 21.9 10.7348 21.9 11V18.95C21.9 19.2152 21.7946 19.4696 21.6071 19.6571C21.4196 19.8446 21.1652 19.95 20.9 19.95C20.6348 19.95 20.3804 19.8446 20.1929 19.6571C20.0054 19.4696 19.9 19.2152 19.9 18.95V13.414L11.708 21.606Z"
                                          fill="#0E0E0E"/>
                                </svg>
                        </span>
                        </a>
                    </div>

                    {/* right */}
                    <div className="flexCol info">
                        {/* email */}
                        <div className="flexRow">
                            <svg width="35" height="30" viewBox="0 0 35 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.728516 7.95833L17.3171 18.1667H17.6816L34.2702 7.95833M34.2702 4.3125V28.375H33.541C29.166 27.6458 21.8743 27.2813 17.4993 27.2813C13.1243 27.2813 5.83268 27.6458 1.45768 28.375H0.728516V4.3125C5.10352 3.58333 13.1243 3.21875 17.4993 3.21875C21.8743 3.21875 29.8952 3.58333 34.2702 4.3125Z"
                                    stroke="#0E0E0E"/>
                            </svg>


                            <p className={"md-text"}>christel.detour@gmail.com</p>
                        </div>

                        {/* map */}
                        <div className="flexRow">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 6.71283C1 4.70616 1 3.70283 1.39058 2.93599C1.73412 2.26177 2.28228 1.71362 2.9565 1.37008C3.72333 0.979492 4.72667 0.979492 6.73333 0.979492H29.3083C31.315 0.979492 32.3183 0.979492 33.0852 1.37008C33.7594 1.71362 34.3075 2.26177 34.6511 2.93599C35.0417 3.70283 35.0417 4.70616 35.0417 6.71283V29.2878C35.0417 31.2945 35.0417 32.2978 34.6511 33.0647C34.3075 33.7389 33.7594 34.287 33.0852 34.6306C32.3183 35.0212 31.315 35.0212 29.3083 35.0212H6.73333C4.72667 35.0212 3.72333 35.0212 2.9565 34.6306C2.28228 34.287 1.73412 33.7389 1.39058 33.0647C1 32.2978 1 31.2945 1 29.2878V6.71283Z"
                                    stroke="#0E0E0E" stroke-linecap="round"/>
                                <path
                                    d="M29.6667 35.0208L18.9167 8.14583M35.0417 4.5625L1 11.7292M18.9167 23.4288C18.9167 27.2952 15.0825 30.0113 13.4109 31.0129C13.1798 31.1515 12.9153 31.2248 12.6458 31.2248C12.3763 31.2248 12.1119 31.1515 11.8808 31.0129C10.2092 30.0113 6.375 27.2952 6.375 23.427C6.375 19.634 9.41367 17.1042 12.6458 17.1042C15.9909 17.1042 18.9167 19.634 18.9167 23.4288Z"
                                    stroke="#0E0E0E"/>
                                <path
                                    d="M12.6452 25.1673C13.6347 25.1673 14.4368 24.3652 14.4368 23.3757C14.4368 22.3861 13.6347 21.584 12.6452 21.584C11.6557 21.584 10.8535 22.3861 10.8535 23.3757C10.8535 24.3652 11.6557 25.1673 12.6452 25.1673Z"
                                    fill="#0E0E0E"/>
                            </svg>


                            <p className={"md-text"}>Simandres 69360 à 20km de Lyon</p>
                        </div>

                        {/* horloge */}
                        <div className="flexRow">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.501 34.457C26.4535 34.457 33.7109 27.1995 33.7109 18.247C33.7109 9.29455 26.4535 2.03711 17.501 2.03711C8.54845 2.03711 1.29102 9.29455 1.29102 18.247C1.29102 27.1995 8.54845 34.457 17.501 34.457Z"
                                    stroke="#0E0E0E"/>
                                <path
                                    d="M26.0817 18.2469H17.9768C17.8503 18.2469 17.7291 18.1967 17.6396 18.1073C17.5502 18.0179 17.5 17.8966 17.5 17.7702V11.5723"
                                    stroke="#0E0E0E" stroke-linecap="round"/>
                            </svg>
                            <p className={"md-text"}>Vous pouvez me contacter de 8h à 18h en semaine</p>
                        </div>


                        {/* nounou top  */}
                        <div className="flexRow">
                            <svg width="34" height="47" viewBox="0 0 34 47" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2002_1540)">
                                    <path
                                        d="M24.5 32.5L25 42.5H23L16.5 37.5L9.5 42.5H7.5L8.23086 32.5L7.5 31.5L6.51773 43.3266H9.79774L16.3603 38.7643L22.8926 43.3266H26.1728L25 31.5L24.5 32.5ZM30.5953 12.6822L30.3992 8.36481L26.7774 6.03543L24.4593 2.39505L20.1635 2.19739L16.3452 0.209961L12.527 2.19784L8.23121 2.3955L5.91307 6.03543L2.29132 8.36481L2.09519 12.6822L0.117188 16.5197L2.09519 20.3574L2.29185 24.6747L5.91307 27.0041L8.23086 30.6445H13L16.3452 32.8296L20.1635 30.8417L24.4593 30.6445L26.7771 27.0041L30.3991 24.675L30.5953 20.3578L32.5733 16.5201L30.5953 12.6822ZM29.5 20V24L26.5 26L24 29.5L20.1635 29.5837L16.3641 31.5L13 29.5H9L7.01136 26L3.72903 24L3.5 20L1.5 16.5L3.43465 12.6822V9L7 7L9 3.5H13L16.5 1.5L20 3.5H24L26 7L29.5 9L29.3519 13.245L31.5 16.5L29.5 20Z"
                                        fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2002_1540">
                                        <rect width="34" height="46" fill="white" transform="translate(0 0.0214844)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className={"md-text"}>Parmis les premières recommandation sur <a
                                style={{textDecoration: 'underline'}}
                                href="https://www.nounou-top.fr/annonce-gratuite/assistante-maternelle/simandres-69360"
                                target="_blank" rel="noreferrer">Nounou-top</a>. <a
                                href="https://www.nounou-top.fr/assmat-agreee-69360-simandres-1"
                                style={{textDecoration: 'underline'}} target={"_blank"} rel="noreferrer">Regardez mon
                                profil !</a></p>
                        </div>
                    </div>
                </article>
                <article>
                    <HorizontalSeparator text="Recommandations"/>
<div className="recommandationCardsContainer">

    <RecommandationCard
    name="Charlotte P."
    content="Christel a gardé nos deux enfants de 2019 à 2023. Elle a toujours été formidable Nous avons eu beaucoup de chance qu’elle veille sur eux Elle est souriante, chaleureuse, dynamique. Elle a toujours une attention pour chacun des enfants qu’elle garde Elle leur propose énormément d’activités : balades, jeux en extérieur, loisirs créatifs, cuisine, picnic, sortie à la chèvrerie… Elle est une présidente très investie de l’association des assistantes maternelles de simandres Elle va au relai plusieurs fois par semaine et les enfants y font bcp d’activités Elle est toujours très disponible et a l’écoute Sa maison est toujours extrêmement propre et elle cuisine chaque jour pour les enfants Ils goûtent de tout Elle dispose d’une pièce dédiée aux enfants. Ils ont leur espace à eux en permanence Un espace où ils peuvent jouer, dessiner, danser… Elle est très attentive à la sécurité des enfants, que ce soit en voiture ou lors des trajets à pied Elle récupérait nos enfants au périscolaire et nous a toujours alerté si elle remarquait des soucis Nos enfants ont beaucoup gagné en autonomie grâce à elle Elle nous a fait partager leur quotidien grâce a un cahier de liaison et en nous envoyant très souvent des photos Elle est aussi au top pour l’administratif En bref, Christel est une personne épanouie dans son travail de nounou, attentive aux enfants, bienveillante, disponible, flexible, dynamique, professionnelle Elle aide les enfants à pousser droit et à gagner en autonomie dans un climat sain et chaleureux Nous lui sommes extrêmement reconnaissant pour tout ce qu’elle a apporté à nos enfants Nous n’aurions pas pu espérer mieux comme nounou"
    ></RecommandationCard>

    <RecommandationCard
    name="Carole G."
    content="Christel a gardé ma fille pendant 3 ans . Elle est une super nounou . Elle fait faire beaucoup d’activités variées aux enfants ( balades, jeux extérieurs, coloriages, peintures…) . Christel est sérieuse et rigoureuse . Elle est attentionnée envers les enfants et leur donne un bon cadre pour évoluer ensemble . Sa maison est bien adaptée avec une salle de jeux dédiée aux enfants . Je recommande Christel pour la garde de votre enfant ."
    ></RecommandationCard>
    <RecommandationCard
        name="Lucie D."
        content="Christel a gardé notre fille pendant un peu plus de 2 ans, et nous la recommandons vivement. Notre fille a pu faire plein d'activités manuelles, plein de jeux, et plein de sorties avec la participation à des activités variées au sein de l'association du village. Christel a parfaitement accompagné le développement de notre fille, qui a toujours été très heureuse d'aller chez sa nounou. Elle a pu profiter des bons petits plats toujours bien équilibrés préparés par Christel, et nous avons beaucoup apprécié sa bonne humeur et sa gentillesse."
    ></RecommandationCard>

    <RecommandationCard
    name="Lauriane L."
    content="Chrystel est la nounou de mes 2 enfants depuis 2013 (mince déjà 6 ans). Elle vit dans une maison (toujours propre) avec un jardin ce qui permet aux enfants de jouer dehors dès que le temps le permet. et elle fait faire beaucoup d’activité aux enfants, j’ai toujours eu une petite attention à toute occasion: fête des mamans, anniversaire, noel, paques... toujours fait par les petites mains de mes petits monstres ! Chrystel est aussi une maman, elle donne parfois de très bon conseils avec son expérience de maman. Point de vue organisation il n’y a rien à dire, les vacances sont connue en septembre pour l’année à venir et je n’ai jamais eu de surprise. Petits détails simpa : - jusqu’au 1 an de mon fils nous avons tenu un « carnet de liaison » (h des biberons, humeur du jour...) qu’elle a agrémenté de photo et petit mot. A relire c’est vraiment simpa ! - a chaque anniversaire les enfants soufflent leurs bougies ! - je reçois de temps en temps des enfants. - les enfants mangent des produits frais, fait maison et parfois même des légumes ou fruits de son jardin !"
    ></RecommandationCard>

    <RecommandationCard
    name="Ornella F."
    content="Christel garde mes enfants depuis 5 ans. C’est une personne de confiance avec qui les enfants se sentent bien et s’amusent tout en apprenant les règles. En tant que parent, je recommande très sincèrement Christel qui m’a permis de passer des journées sans inquiétude pour mes enfants que je savais entre de très bonnes mains. Merci Christel pour votre attention et votre investissement depuis toutes ces années!"
    ></RecommandationCard>

    <RecommandationCard
    name="Camille C."
    content="Christel exerce son métier avec passion. Elle est très douce, et patiente avec les bébés et les enfants. Elle leur propose diverses activités ludiques, éveil, bricolage ect... En tant que jeune maman il est toujours difficile de laisser son bébé alors je la recommande. Nous avons totalement confiance en elle et Mon fils adore sa nounou il me réclame toujours d'aller chez elle . Merci !"
    ></RecommandationCard>
</div>

                </article>
            </section>

            {/* footer */}
        </>
    )
}
