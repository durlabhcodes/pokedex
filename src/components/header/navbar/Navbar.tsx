import React from "react";
//import { fetchPokemonList } from "../../../utils/httpUtils";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__logo">
                <img src="pokedex_logo.png" alt=""/>
            </div> 
        </nav>
    );
}