import { useState } from "react";
import { SearchContainer, SearchInput, Button1 } from "./searchBar.styles";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <SearchContainer>
         <SearchInput type onChange={handleChange} value = {id} />
         <Button1 onClick={() => {onSearch(id)}}>Search</Button1>
      </SearchContainer>
   );
}