import { Link } from "react-router-dom";
import './index.css';
import { useState, useEffect } from "react";

function Header() {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize(); // Call the function once to set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <>
            <header className="main-header">
                <div className="main-header__logo">
                    <Link to={'/'}>
                        <img src="logo.png" />
                    </Link>
                </div>

                <div className={isDesktop ? "main-header__nav" : "main-header__nav--mobile"}>
                    <nav>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/shop'}>Shop</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </nav>
                </div>

                <div className={isDesktop ? "main-header__cart" : "main-header__cart align-center"}>
                    <Link to={'/cart'}>
                        <svg width="40" height="40" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1875 32.5C13.5337 32.5 14.625 31.4087 14.625 30.0625C14.625 28.7163 13.5337 27.625 12.1875 27.625C10.8413 27.625 9.75 28.7163 9.75 30.0625C9.75 31.4087 10.8413 32.5 12.1875 32.5Z" fill="white" />
                            <path d="M26.8125 32.5C28.1587 32.5 29.25 31.4087 29.25 30.0625C29.25 28.7163 28.1587 27.625 26.8125 27.625C25.4663 27.625 24.375 28.7163 24.375 30.0625C24.375 31.4087 25.4663 32.5 26.8125 32.5Z" fill="white" />
                            <path d="M4.875 8.125H8.125L9.1 13M9.1 13L11.375 24.375H27.625L30.875 13H9.1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </header >
            <div className="main-header__bottom-divider"></div>
        </>

    );
}


export default Header;