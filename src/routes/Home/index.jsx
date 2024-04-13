import { Link } from 'react-router-dom';
import './index.css';

function Home() {

    return (
        <div className="home">
            <div className='home__heading'>
                <h1>Lens Legacy</h1>
                <p>Elevate Your Space with Elegance</p>
                <Link className='button' to='/shop'>Go to shop</Link>
            </div>
        </div>
    );
}

export default Home;