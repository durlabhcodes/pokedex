import React from "react";
//import { fetchPokemonList } from "../../../utils/httpUtils";
import './Navbar.css';

export default class Navbar extends React.Component {
    // componentDidMount() {
    //     fetchPokemonList();
    // }
    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-bar__logo">
                    <img src="pokedex_logo.png" alt=""/>
                </div> 
            </nav>
        );
    }
}