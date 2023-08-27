import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    //axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-CEGGonzalez`)
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        if (response.data?.name) {
          setCharacter(response.data);
        } else {
          console.log("No se encontró un personaje con este ID");
        }
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  }, [id]);

  if (!character) {
    return <div>Loading...</div>; // Puedes mostrar un indicador de carga mientras se obtienen los datos
  }

  return (
    <div className='detail'>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin?.name}</h2>
    </div>
  );
}

export default Detail;
