import customStyles from '../styles/customStyles.module.css';

export default function MyNav() { 
    return (
        <nav className={customStyles.nav}>
            <img 
                src={'reacticon.png'}
                width={50}
                height={50}
            />
            <ul className={customStyles.navItems}>
                <li className={customStyles.navItem}>Pricing</li>
                <li className={customStyles.navItem}>About</li>
                <li className={customStyles.navItem}>Contact</li>
            </ul>
        </nav>
    ); 
}