import { Link } from "react-router-dom";
import './index.css';
import useIsDesktop from "../../hooks/useIsDesktop";
import CartIcon from "../CartIcon";

function Header() {
    const isDesktop = useIsDesktop();

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
                        <CartIcon />
                    </Link>
                </div>
            </header >
            <div className="main-header__bottom-divider"></div>
        </>

    );
}


export default Header;