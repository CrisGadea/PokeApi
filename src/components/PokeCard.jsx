import React from "react";
import HabilidadesPokemon from "./HabilidadesPokemon";

const PokeCard = ({ imagen, nombre, habilidades, peso, altura, tipo, experiencia}) => {
    return <div id="cards">
            <figure className="card card--normal">
                <div className="card__image-container">
                    <img src={imagen} alt="tipo" className="card__image"/>   
                </div>
                <figcaption className="card__caption">
                    <h1 className="card__name">Nombre: {nombre}</h1>
                    <h3 className="card__type">
                    {tipo}
                    </h3>
                    <table className="card__stats">
                        <tbody>
                            <tr><td><h2>Peso: {peso}</h2></td></tr>
                            <tr><td><h2>Altura: {altura}</h2></td></tr>
                            <tr><td><h2>Experiencia base: {experiencia}</h2></td></tr>
                        </tbody>
                    </table>
                    <div className="card__abilities">
                    <div className="card__ability">
                        <HabilidadesPokemon habilidades={habilidades}/>
                    </div>
                    </div>
                </figcaption>
            </figure>
        </div>
}

export default PokeCard;