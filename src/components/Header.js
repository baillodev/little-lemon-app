import Nav from './Nav';
import Logo from '../assets/Logo.svg'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt='Little Lemon Logo' />
            <Nav />
        </header>
    )
}