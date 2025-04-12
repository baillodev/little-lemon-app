import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Nav from './Nav'

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <Link to='/'>
                    <img src={Logo} alt='Little Lemon Logo' />
                </Link>
                <div>
                    <h3>Doormat Navigation</h3>
                    <Nav />
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}