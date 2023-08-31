import Cards from "./components/Cards/Cards.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/NavBar/Nav.jsx";
import About from "./views/About/About.jsx";
import Detail from "./views/Details/Detail.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Form  from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAcces] = useState(false);
  let EMAIL = "";
  let PASSWORD = "";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function onSearch(id) {
    const parsedId = parseInt(id);

    if (isNaN(parsedId) || parsedId <= 0 || parsedId > 826) {
      window.alert("ID inválido");
      return;
    }

    // axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-CEGGonzalez`)
    axios(`https://rickandmortyapi.com/api/character/${parsedId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        window.alert("Ocurrió un error al obtener los datos del personaje.");
      });
  }

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAcces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  function randomHandler() {
    let cache = [];
    let randomId = Math.floor(Math.random() * 826);
    randomId = Number(randomId);
    if (!cache.includes(randomId)) {
      cache.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje esta repetido");
      return;
    }
  }

  return (
    <div className="App">
      <>
        {pathname !== "/" && (
          <Nav onSearch={onSearch} randomize={randomHandler} />
        )}
        <Routes>
          
          <Route path="/" element={<Form login={login} />} />

          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />

          <Route path="/about" element={<About />} />
          
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
      </>
    </div>
  );
}

export default App;
