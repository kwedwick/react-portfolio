import React, { useState, useEffect } from 'react';
import { Button } from '../Button/index';
import { Link } from 'react-router-dom';

function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Keegan Wedwick</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                        </Link>
                        </li>
                            <li>
                                <Link
                                    to='/contact'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    Contact Me
                                </Link>
                            </li>
                    </ul>
                        {button && <Button buttonStyle='btn--outline'>Contact</Button>}
                </div>
            </nav>
        </>
    )
}

export default Nav
