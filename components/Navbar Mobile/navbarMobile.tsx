import styles from './navbarMobile.module.css';

export default function NavbarMobile() {

    const projectsIcon = projectsButton();

    return(
        <nav className={styles.nav} >
            {projectsIcon}
        </nav>
    );
}


function projectsButton(){
    return(
    <svg width="57" height="57" viewBox="0 0 57 57" className={styles.projects} xmlns="http://www.w3.org/2000/svg">
    <g>
    <rect x="5" y="1" width="21" height="21" rx="7" />
    <rect x="5" y="27" width="21" height="21" rx="7" />
    <rect x="31" y="1" width="21" height="21" rx="7" />
    <rect x="31" y="27" width="21" height="21" rx="7" />
    </g>
    {/* <defs>
    <filter id="filter0_d_3_116" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_116"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_116" result="shape"/>
    </filter>
    </defs> */}
    </svg>
    );
}