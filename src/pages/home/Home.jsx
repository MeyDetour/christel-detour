import {motion} from 'framer-motion';

import Img from './../../components/Img';
import HorizontalSeparator from './../../components/HorizontalSeparator';

import './style.css';

export const Home = () => {

    return (
        <>

            <section className="top">
                <svg className="pinkRound" viewBox="0 0 715 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M91.3017 75.2794C113.257 58.5615 138.027 45.9079 164.44 37.9174L251.053 11.715C285.292 1.35709 321.343 -1.59284 356.811 3.06141L519.364 24.3929C631.015 39.0445 714.5 134.201 714.5 246.809V246.809C714.5 284.018 705.244 320.643 687.566 353.384L643.5 435L632.032 451.71C569.533 542.78 447.162 569.857 352.076 513.656L263.143 461.091C236.888 445.573 203.591 448.941 180.976 469.402V469.402C150.635 496.854 103.278 492.361 78.6413 459.693L46.0791 416.516C38.0827 405.914 31.9159 394.048 27.8339 381.41L11.3407 330.349C-18.8209 236.972 13.2317 134.727 91.3017 75.2794V75.2794Z"
                        fill="#F9D6FF"/>
                </svg>

                <svg className="line" viewBox="0 0 1920 477" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1988 251.143C1988 251.143 1805 324.857 1670 292.939C1535 261.022 1632.5 35.6998 1419 3.78225C1205.5 -28.1353 1019.49 222.645 1101 341.955C1182.5 461.266 1348.5 414.53 1405 341.955C1461.5 269.381 1448.5 186.928 1270 123.853C1091.5 60.7777 805.494 -0.777201 625.492 3.78225C445.489 8.3417 324.493 70.2769 149.99 341.955C-24.5119 613.634 -209.011 385.652 -137.01 401.231"
                        stroke="#0E0E0E"/>
                </svg>

                <div className="flexCol title">
                    <motion.h1
                        style={{overflow: "hidden", whiteSpace: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: "100%"}}
                        transition={{duration: 1.5, ease: "easeInOut"}}
                    >
                        DETOUR Christel
                    </motion.h1>
                    <motion.h2
                        style={{overflow: "hidden", whiteSpace: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: "100%"}}
                        transition={{duration: 1.5, delay: 1, ease: "easeInOut"}}
                    >
                        Assistante maternelle
                    </motion.h2>
                </div>

                <div className="flexRow homeBoxes">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
                        transition={{duration: .6, delay: 1.5 + 1, ease: "easeInOut"}}
                        className="flexCol"
                    >
                        <p className="md-text">Faites défiler l’écran<br/>pour mieux me connaître.</p>
                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_361_1107)">
                                <path
                                    d="M19.0395 7.15065C19.342 7.15065 19.6322 7.27083 19.8461 7.48475C20.06 7.69866 20.1802 7.9888 20.1802 8.29132V12.854C20.1802 13.1565 20.06 13.4467 19.8461 13.6606C19.6322 13.8745 19.342 13.9947 19.0395 13.9947C18.737 13.9947 18.4468 13.8745 18.2329 13.6606C18.019 13.4467 17.8988 13.1565 17.8988 12.854V8.29132C17.8988 7.9888 18.019 7.69866 18.2329 7.48475C18.4468 7.27083 18.737 7.15065 19.0395 7.15065ZM28.1648 25.4013C28.1648 27.8215 27.2034 30.1426 25.4921 31.8539C23.7808 33.5653 21.4597 34.5267 19.0395 34.5267C16.6193 34.5267 14.2982 33.5653 12.5869 31.8539C10.8756 30.1426 9.91415 27.8215 9.91415 25.4013V11.7133C9.91415 9.29313 10.8756 6.97206 12.5869 5.26073C14.2982 3.5494 16.6193 2.58798 19.0395 2.58798C21.4597 2.58798 23.7808 3.5494 25.4921 5.26073C27.2034 6.97206 28.1648 9.29313 28.1648 11.7133V25.4013ZM19.0395 0.306641C16.0143 0.306641 13.1129 1.50841 10.9738 3.64758C8.83458 5.78675 7.63281 8.68808 7.63281 11.7133V25.4013C7.63281 28.4266 8.83458 31.3279 10.9738 33.4671C13.1129 35.6063 16.0143 36.808 19.0395 36.808C22.0647 36.808 24.9661 35.6063 27.1052 33.4671C29.2444 31.3279 30.4462 28.4266 30.4462 25.4013V11.7133C30.4462 8.68808 29.2444 5.78675 27.1052 3.64758C24.9661 1.50841 22.0647 0.306641 19.0395 0.306641Z"
                                    fill="#606060"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_361_1107">
                                    <rect width="36.5014" height="36.5014" fill="white"
                                          transform="translate(0.789062 0.306641)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M19.0389 9.93359C19.3414 9.93359 19.6315 10.0538 19.8454 10.2677C20.0593 10.4816 20.1795 10.7717 20.1795 11.0743V24.29L25.0753 19.392C25.1813 19.286 25.3072 19.2018 25.4458 19.1444C25.5844 19.087 25.7329 19.0575 25.8829 19.0575C26.0329 19.0575 26.1814 19.087 26.3199 19.1444C26.4585 19.2018 26.5844 19.286 26.6905 19.392C26.7965 19.4981 26.8806 19.624 26.938 19.7625C26.9954 19.9011 27.025 20.0496 27.025 20.1996C27.025 20.3496 26.9954 20.4981 26.938 20.6367C26.8806 20.7752 26.7965 20.9011 26.6905 21.0072L19.8464 27.8512C19.7405 27.9574 19.6146 28.0417 19.476 28.0992C19.3375 28.1567 19.1889 28.1863 19.0389 28.1863C18.8888 28.1863 18.7403 28.1567 18.6017 28.0992C18.4631 28.0417 18.3372 27.9574 18.2313 27.8512L11.3873 21.0072C11.2812 20.9011 11.1971 20.7752 11.1397 20.6367C11.0823 20.4981 11.0527 20.3496 11.0527 20.1996C11.0527 20.0496 11.0823 19.9011 11.1397 19.7625C11.1971 19.624 11.2812 19.4981 11.3873 19.392C11.6014 19.1778 11.8919 19.0575 12.1948 19.0575C12.3448 19.0575 12.4933 19.087 12.6319 19.1444C12.7705 19.2018 12.8964 19.286 13.0024 19.392L17.8982 24.29V11.0743C17.8982 10.7717 18.0184 10.4816 18.2323 10.2677C18.4462 10.0538 18.7363 9.93359 19.0389 9.93359Z"
                                  fill="#606060"/>
                        </svg>

                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
                        transition={{duration: 1.2, delay: 2 + 1, ease: "easeInOut"}}
                        className="flexRow"
                    >
                        <h3>Apprenez à me connaître</h3>
                        <div className="flexCol">
                            <p className="md-text">Qui-suis je ?</p>
                            <p className="md-text">Mes formations</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: [1.2, 0.9, 1]}}
                        transition={{duration: .6, delay: 1 + 1, ease: "easeInOut"}}
                        className="flexRow"
                    >
                        <h3>Mon activité</h3>
                        <div className="flexCol">
                            <p className="md-text">Mon rôle</p>
                            <p className="md-text">Accompagnement</p>
                            <p className="md-text">Lieu d’accueil</p>
                            <p className="md-text">Organisation</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="bottom">
                <article>
                    <HorizontalSeparator text="Qui suis-je ?"/>
                    <div className="flexRowAround content">
                        <p className="md-text">Je me présente, je m'appelle Christel Detour, j'ai 52 ans et je suis
                            Assistante Maternelle à Simandres agréée par le Conseil Général du Rhône depuis
                            2008.<br/><br/>J’ai fait des études de comptabilité et j’ai travaillé 14 ans en tant que
                            chef de service au siège d’un grand groupe de vente d’électroménager, de téléphonie, de
                            matériel informatique et audiovisuel.</p>
                        <Img src="./images/profile-picture.png"
                             alt="Christel Detour, assistante maternelle formée et bienveillante. Accompagnement des enfants avec une approche pédagogique attentive et personnalisée."/>
                    </div>
                </article>
                <article className="second-article">
                    <HorizontalSeparator text="Formations"/>
                    <div className="flexRowAround content">
                        <div>
                            <div className="flexRow">
                                <h4>01</h4>
                                <p className="sm-text">
                                    <span className="md-text">Alimentation d’un jeune enfant</span><br/>
                                    Une alimentation saine et équilibrée, dès le plus jeune âge, contribue à la bonne
                                    santé des enfants. Entre 4 mois et 3 ans, c’est la découverte de nouveaux goûts, de
                                    nouvelles saveurs et textures.
                                </p>
                            </div>
                            <div className="flexRow">
                                <h4>02</h4>
                                <p className="sm-text">
                                    <span className="md-text">L'éveil corporel</span><br/>
                                    En s’appropriant très vite son corps par le mouvement, en explorant soi-même son
                                    environnement, en découvrant par le geste des contrées imaginaires, le jeune enfant
                                    gagne en confiance.
                                </p>
                            </div>
                            <div className="flexRow">
                                <h4>03</h4>
                                <p className="sm-text">
                                    <span
                                        className="md-text">Formation Sauveteur Secouriste du Travail (SST)</span><br/>
                                    Les émotions chez le jeune enfant sont des manifestations spontanées et variées qui
                                    participent à son développement. L’enfant exprime d’abord des émotions primaires,
                                    comme la joie, la tristesse, la colère, la peur le dégoût et la surprise, qui
                                    apparaissent au cours de la première année de vie.
                                </p>
                            </div>
                            <div className="flexRow">
                                <h4>04</h4>
                                <p className="sm-text">
                                    <span className="md-text">L’éveil musical</span><br/>
                                    La psychomotricité est la relation entre la perception, la sensibilité, le savoir,
                                    et la motricité d’un enfant. Elle permet à l’enfant de s’intégrer au niveau social,
                                    de favoriser le jeu en groupe, et d’affronter certaines peurs. Elle est aussi la
                                    fenêtre vers le monde de l’enfant dans ses fonctions symboliques, comportementales,
                                    cognitives, et langagières.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flexRow">
                                <h4>05</h4>
                                <p className="sm-text">
                                    <span className="md-text">Psychomotricité</span><br/>
                                    La musique a un effet positif sur le bébé. Elle l’apaise et lui apprend à grandir.
                                    L’éveil musical permet au bébé de développer des capacités d’écoute, et de
                                    concentration. Son ouïe s’affine et le bébé est bientôt capable de distinguer les
                                    différentes nuances d’un morceau musical et de danser en rythme.
                                </p>
                            </div>
                            <div className="flexRow">
                                <h4>06</h4>
                                <p className="sm-text">
                                    <span className="md-text">Les émotions chez le jeune enfant</span><br/>
                                    Intervenir face à une situation d’accident, protéger de façon adaptée, examiner la
                                    situation. Garantir une alerte favorisant l’arrivée de secours. Secourir la victime
                                    de manière appropriée.
                                </p>
                            </div>
                            <div className="flexRow">
                                <h4>07</h4>
                                <p className="sm-text">
                                    <span className="md-text">Baby Yoga</span><br/>
                                    En s’appropriant très vite son corps par le mouvement, en explorant soi-même et son
                                    environnement, en découvrant par le geste des contrées imaginaires, le jeune enfant
                                    gagne en confiance.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </>
    );
}
