import Nav from './Nav';
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <img src={Logo} alt='Little Lemon Logo' />
                </Link>
                <Nav />
            </div>
        </header>
    )
}