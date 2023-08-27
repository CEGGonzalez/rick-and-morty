import { useState } from "react";
import { SearchContainer, SearchInput, } from "./searchBar.styles";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <SearchContainer>
         <SearchInput type='search' onChange={handleChange} value = {id} />
         <button onClick={() => {onSearch(id)}}>Search</button>
      </SearchContainer>
   );
}