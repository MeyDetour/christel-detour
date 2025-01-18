import {useLocation} from 'preact-iso';

export const Header = () => {
    const {url} = useLocation();
    const openMenu = () => {
        let menu = document.querySelector('.menu')
        if (!menu) {
            window.location.reload();
            return;
        }
        menu.style.bottom = '0%';
        menu.style.display = 'flex'
    }

    return (
        <header>
            {url !== "/" &&
                <svg width="1920" height="252" viewBox="0 0 1920 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-9.00012 -16.4145C-9.00012 -16.4145 174.001 -94.629 309.001 -60.7631C444 -26.8972 346.502 212.182 560.002 246.048C773.502 279.914 959.505 13.8232 878.004 -112.772C796.502 -239.367 630.503 -189.777 574.002 -112.772C517.5 -35.7669 530.501 51.7207 709.003 118.647C887.505 185.573 1173.51 250.886 1353.51 246.048C1533.51 241.21 1654.51 175.494 1829.01 -112.772C2003.51 -401.037 2188.01 -159.136 2116.01 -175.666"
                        stroke="#C7C2B3" stroke-width="5"/>
                </svg>
            }
            <nav>
                <ul>
                    <li>
                        <a href="/" className={`md-text  ${url === '/' && 'active'}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className={"point"}/>
                    </li>
                    <li>
                        <a href="/activite" className={`md-text  ${url === '/activite' && 'active'}`}>
                            Mon activité
                        </a>
                    </li>
                    <li>
                        <div className={"point"}/>
                    </li>

                    <li>
                        <a href="/procedure" className={`md-text  ${url === '/procedure' && 'active'}`}>
                            Procédure
                        </a>
                    </li>
                    <li>
                        <div className={"point"}/>
                    </li>
                    <li>
                        <a href="/animations" className={`md-text  ${url === '/animations' && 'active'}`}>
                            Animations
                        </a>
                    </li>
                    <li>
                        <div className={"point"}/>
                    </li>
                    <li>
                        <a href="/contact" className={`md-text  ${url === '/contact' && 'active'}`}>
                            Contact
                        </a>
                    </li>
                </ul>


            </nav>
            <div className="burgerContainer">
                <svg onClick={openMenu} width="34px" height="24px" viewBox="0 0 34 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.66602 2.41699H7.41602M32.3327 2.41699H15.0827M32.3327 21.5837H26.5827M1.66602 21.5837H18.916M1.66602 12.0003H32.3327"
                        stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round"/>
                </svg>

            </div>
        </header>
    );
}
