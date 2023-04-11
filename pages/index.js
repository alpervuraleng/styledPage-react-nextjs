function NavBar() {
    return (
        <nav>
            <h1>Free Groceries</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>        
        </nav>
    );
}

export default function MyPage() {
    return (
        <NavBar/>
    );
}