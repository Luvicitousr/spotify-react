import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="menu">
            <nav className="menu__navigation">
                <div className="navigation">
                    <ul>
                        <li>
                            <div className="menu__login">
                                <button className="login">Entrar</button>
                            </div>
                        </li>
                        <li className="menu__playlist">
                            <a href="">
                                <span className="playlist fa-solid fa-music"></span>
                                <span>Playlist</span>
                            </a>
                        </li>
                        <li className="menu__search">
                            <a href="#" onclick="clickSearch()">
                                <span className="search fa-solid fa-magnifying-glass"></span>
                                <span>Buscar</span>
                            </a>
                            <input id="search-input" className="hidden search-input" type="text" maxlength="800"
                                placeholder="O que você quer ouvir?" />
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;