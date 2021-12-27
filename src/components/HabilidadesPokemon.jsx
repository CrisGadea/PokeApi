import React from "react";
import Habilidad from "./Habilidad";

const HabilidadesPokemon = ({ habilidades }) => {
    return <>
    <h4>Habilidades:</h4>
    <ul>
        {habilidades.map(habilidad => (
            <Habilidad key={Math.random()} habilidad={habilidad.ability.name}/>
        ))}
    </ul>
    </>
    
}

export default HabilidadesPokemon;