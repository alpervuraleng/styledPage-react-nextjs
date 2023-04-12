import styles from '../styles/globals.css';
import customStyles from '../styles/customStyles.module.css';

function MyNav() { 
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

function MyContent() { 
    return (
        <>
            <header>
                <MyNav></MyNav>
            </header>
            <h1>I like React because</h1>
            <ol>
                <li>Very popular</li>
                <li>Easy to learn</li>
            </ol> 
            <footer>
                © 2023 Vural development. All rights reserved.
            </footer>
        </>   
    ); 
}

export default function MyPage() {
    return <MyContent/>;
}