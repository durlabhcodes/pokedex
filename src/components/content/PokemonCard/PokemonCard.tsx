import React from "react";

interface PokemonCardProps {
    name: string;
}

export default function PokemonCard(props: PokemonCardProps) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-card__img">
                <img src="/dummy.jpeg" alt="" />
            </div>
            <div className="pokemon-card__details">
                <div className="pokemon-card__name">{props.name}</div>
            </div>
        </div>
    )
}