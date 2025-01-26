import {useLocation} from "preact-iso";

export default function NavigationMenu() {
    const {url} = useLocation();
    const closeMenu = () => {

        if (typeof window !== 'undefined') {
            let menu = document.querySelector('.menu')
            if (!menu) {
                window.location.reload();
                return;
            }
            menu.style.bottom = '100%';
            menu.style.display = 'none';
        }
    }

    return (
        <div className="menu">
            <svg onClick={closeMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_416_2102)">
                    <path d="M2.38454 0.872142L11.997 10.4775L21.5073 0.968578C22.1554 0.391378 22.8262 0.735996 23.0942 1.02531C23.2662 1.23482 23.3549 1.50035 23.3434 1.77113C23.3318 2.04191 23.2209 2.29896 23.0318 2.49312L13.5201 12.0006L23.0318 21.5053C23.4545 21.8598 23.4545 22.5547 23.1155 22.9433C22.7752 23.3305 22.1512 23.5545 21.5626 23.0951L11.997 13.5237L2.41999 23.0993C2.00021 23.4751 1.30814 23.3985 0.966355 23.0256C0.623155 22.6512 0.492682 22.0045 0.9309 21.5478L10.4738 12.0006L0.970609 2.49312C0.623154 2.11021 0.502609 1.40963 0.970609 0.968578C1.43861 0.527523 2.13635 0.588505 2.38454 0.872142Z" fill="#0E0E0E"/>
                </g>
                <defs>
                    <clipPath id="clip0_416_2102">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <ul>
                <li>
                    <a  onClick={closeMenu} href="/" className={`md-text  ${url === '/' && 'active'}`}>
                        Home
                    </a>
                </li>
                <li>
                    <div className={"point"}/>
                </li>
                <li>
                    <a  onClick={closeMenu} href="/activite" className={`md-text  ${url === '/activite' && 'active'}`}>
                        Mon activité
                    </a>
                </li>
                <li>
                    <div className={"point"}/>
                </li>

                <li>
                    <a onClick={closeMenu} href="/procedure" className={`md-text  ${url === '/procedure' && 'active'}`}>
                        Procédure
                    </a>
                </li>
                <li>
                    <div className={"point"}/>
                </li>
                <li>
                    <a  onClick={closeMenu} href="/animations" className={`md-text  ${url === '/animations' && 'active'}`}>
                        Animations
                    </a>
                </li>
                <li>
                    <div className={"point"}/>
                </li>
                <li>
                    <a  onClick={closeMenu} href="/contact" className={`md-text  ${url === '/contact' && 'active'}`}>
                        Contact
                    </a>
                </li>
            </ul>
            <span></span>
        </div>
    )
}