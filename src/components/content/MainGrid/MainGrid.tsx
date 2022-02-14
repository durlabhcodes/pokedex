import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../../../utils";
import { PokemonCard } from "../PokemonCard";
import "./Maingrid.css";

export default function Maingrid() {

    const [pokemonList, setPokemonList] = useState({
        results: []
    });

    useEffect(() => {
        fetchPokemonList()
        .then((result) => {
            setPokemonList(result)
        });
    });

    
    return (
        <section className="main-grid">
            {pokemonList.results && pokemonList.results.length > 0 ? pokemonList.results.map((result:any) => <PokemonCard name={result.name}/>) : <div>Loading</div>}
        </section>
    );

}