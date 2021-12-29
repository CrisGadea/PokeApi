import {React, useState, useEffect} from "react";
import HabilidadesPokemon from "./HabilidadesPokemon";

const PokeCard = ({ imagen, nombre, habilidades, peso, altura, tipo, experiencia}) => {
    //let card = "";
    
    const [card, setCard] = useState("");

    useEffect(() => {
        switch (tipo) {
            case "grass":
                setCard("card card--grass");
                
                break;
            case "ice":
                setCard("card card--ice");
                break;
            case "fire":
                setCard("card card--fire");
            break;
            case "electric":
                setCard("card card--electric");
            break;
            case "fairy":
                setCard("card card--fairy");
            break;
            case "dark":
                setCard("card card--dark");
            break;
            case "psychic":
                setCard("card card--psychic");
            break;
            case "water":
                setCard("card card--water");
            break;
            case "normal":
                setCard("card card--normal");
            break;
        
            default:
                break;
        }
    }, [tipo])
    
    return <div id="cards">
            <figure className={card}>
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