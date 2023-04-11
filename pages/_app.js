import styles from '../styles/globals.css';

const image = 
<img 
    src={'reacticon.png'}
    width={50}
    height={50}
/>

function MyContent() {
    return (<div>
        {image}
        <h1>Fun Facts About React</h1>
        <ul>
            <li>First released</li>
            <li>Originally created</li>
            <li>Is Maintained</li>
        </ul>    
    </div>);    
}

export default function MyPage() {
    return <MyContent/>;
}