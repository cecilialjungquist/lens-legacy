import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import './index.css';
import useIsDesktop from "../../hooks/useIsDesktop";
import CartIcon from "../CartIcon";
import anime from 'animejs/lib/anime.es.js';

function Header() {
    const isDesktop = useIsDesktop();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    function handleScroll() {
        const currentScrollPos = window.scrollY;
        const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
    }

    useEffect(() => {
        anime({
            targets: '.main-header__nav--mobile',
            translateX: visible ? '0' : '-100%',
            duration: 300,
            easing: 'easeInOutQuad',
        });
    }, [visible]);

    return (
        <header className={`main-header ${!isDesktop ? 'mobile' : ''}`}>
            <div className="main-header__flex">
                <div className="main-header__logo">
                    <Link to={'/'}>
                        <img src="logo.png" />
                    </Link>
                </div>

                <div className={`main-header__nav ${!isDesktop ? 'main-header__nav--mobile' : ''}`}>
                    <nav>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/shop'} >Shop</NavLink>
                        <NavLink to={'/about'} >About</NavLink>
                        <NavLink to={'/contact'} >Contact</NavLink>
                    </nav>
                </div>

                <div className="main-header__cart">
                    <Link to={'/cart'}>
                        <CartIcon />
                    </Link>
                </div>
            </div>
            <div className="main-header__bottom-divider"></div>
        </header>
    );
}

export default Header;
