import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <h1 style={{ display: 'flex', justifyContent: 'space-between' }}> Dislex.shop </h1>
            <nav>
                <Link to="/">Inicio</Link> {'/'}
                <Link to="/category/consolas">Opcion 1</Link>
                <Link to="/category/celular">Opcion 2</Link>
                <Link to="/category/opcion3">Opcion 3</Link>
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;