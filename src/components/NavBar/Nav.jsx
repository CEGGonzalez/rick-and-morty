import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const Nav = ({ onSearch, randomize }) => {
  return (
      <nav className={style.NavBar}>
        <SearchBar onSearch={onSearch} />
        <button className={style.button}>
          <Link to="/about">About</Link>
        </button>
        <button className={style.button}>
          <Link to="/home">Home</Link>
        </button>
        <button className={style.button} onClick={randomize}>Ran</button>
      </nav>
  );
};
export default Nav;
