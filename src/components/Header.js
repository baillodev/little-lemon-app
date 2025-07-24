import Nav from './Nav';
import logo from '../assets/images/logo1.png'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <header>
                <div className='container'>
                    <Link to='/'>
                        <img src={logo} alt='Little Lemon Logo' width={148} height={40} />
                    </Link>
                    {isOpen ? (
                        <div className="mobile-menu">
                            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                                <X size={24} />
                            </button>
                            <Nav />
                        </div>
                    ) : (
                        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
                            <Menu size={24} />
                        </button>
                    )}
                    
                </div>
            </header>
        );
    }

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