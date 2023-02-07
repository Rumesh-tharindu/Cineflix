import Image from 'next/image';
import Logo from '../public/icons/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSearch,
    faCart,
    faCartShopping,
    faUser,
    faUserAlt,
    faUsersLine
  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="" className="header__logo">
                    <Image
                        
                        src={Logo}
                        alt="Picture of the author"
                        className='header__logo-image'
                    />
                    <span className='header__logo-title'>CinemaFlix</span>
                    </a>
                    <div className="header__navigation">
                        <ul className="navigation">
                            <li className="navigation__main-item">
                                <a href="">Movies</a>
                            </li>

                            <li className="navigation__main-item">
                                <a href="">Channels</a>
                            </li>
                            <li className="navigation__main-item">
                                <a href="">Short Movie</a>
                            </li>
                            <li className="navigation__main-item">
                                <a href="">Cartoon</a>
                            </li>
                            <li className="navigation__main-item">
                                <a href="">Stage Drama</a>
                            </li>
                            <li>
                                <a href="">Sreaming</a>
                            </li>
                           
            
                            <li className="navigation__main-item">
                                <a href="">News</a>
                            </li>
                            <li className="navigation__main-item">
                            <FontAwesomeIcon
                            icon={faSearch}
                            />
                            </li>
                            <li className="navigation__main-item">
                            <FontAwesomeIcon
                            icon={faCartShopping}
                            />
                            </li>

                            <li className="navigation__main-item">
                            <Link href='login'> 
                                <FontAwesomeIcon
                                icon={faUser}
                                /> 
                            </Link>
                           
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;