import React, {useState, useEffect} from "react";
import "./styles/Styles.scss";
import PokeCard from "./components/PokeCard";
import PokeSppiner from "./components/PokeSppiner";

function App() {

  const [imagenPokemon, setImagenPokemon] = useState('');

  const [nombrePokemon, setNombrePokemon] = useState('');

  const [alturaPokemon, setAlturaPokemon] = useState('');

  const [experienciaPokemon, setExperienciaPokemon] = useState('');

  const [habilidadesPokemon, setHabilidadesPokemon] = useState([]);

  const [pesoPokemon, setPesoPokemon] = useState('');

  const [tipoPokemon, setTipoPokemon] = useState('');

  const [isLoaded,setIsLoaded]=useState(false);

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    obtenerPokemon();
  }, [])

  const obtenerPokemon = (pokemon = 1) => {
    fetch(url + pokemon)
    .then(response => response.json())
    .then(
      data => {
        setTimeout(() => {
          setImagenPokemon(data.sprites.front_default)
          setNombrePokemon(data.species.name)
          setAlturaPokemon(data.height)
          setExperienciaPokemon(data.base_experience)
          setHabilidadesPokemon(data.abilities)
          setPesoPokemon(data.weight)
          setTipoPokemon(data.types[0].type.name)
          setIsLoaded(true)

        }, 2000)
      }
    )
    .catch(
      setTimeout(()=>{
        setIsLoaded(true)
      }, 3000),
      setNombrePokemon("-"),
      setAlturaPokemon("-"),
      setExperienciaPokemon("-"),
      setHabilidadesPokemon([]),
      setPesoPokemon("-"),
      setTipoPokemon("-"),
      setImagenPokemon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sL0yEksBQCvRgm_47IrlR8cXSISNwOu6Zh5VUnUTLFm3ufYxdJoGRZOCl2gTp41ENqY&usqp=CAU'),
      setIsLoaded(false)
    )
  }


  return (
    <div className="App">
      { isLoaded  ?( 
      <><PokeCard habilidades={habilidadesPokemon} imagen={imagenPokemon} tipo={tipoPokemon} peso={pesoPokemon}
          experiencia={experienciaPokemon} altura={alturaPokemon} nombre={nombrePokemon} /><form
            onSubmit={evento => {
              evento.preventDefault();
              const poke = document.getElementById("pokemon").value;
              obtenerPokemon(poke);
            } }
          >
            <input type="text" id="pokemon" />
            <input type="submit" value="Consultar" />
          </form></>) :
      (<PokeSppiner/>)}
    </div>
  );
}

export default App;
