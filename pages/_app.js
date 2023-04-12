import styles from '../styles/globals.css';
import customStyles from '../styles/customStyles.module.css';
import MyNav from './myNav.jsx';

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
            <footer className={customStyles.footer}>
                © 2023 Vural development. All rights reserved.
            </footer>
        </>   
    ); 
}

export default function MyPage() {
    return <MyContent/>;
}