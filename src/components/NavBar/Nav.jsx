import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
//import "./Nav.css"

const Nav = ({ onSearch, randomize }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button onClick={randomize}>Ran</button>
    </nav>
  );
};
export default Nav;
