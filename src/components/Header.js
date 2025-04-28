import Nav from './Nav';
import logo from '../assets/images/logo1.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <img src={logo} alt='Little Lemon Logo' width={148} height={40} />
                </Link>
                <Nav />
            </div>
        </header>
    )
}