// import Card from "../../components/Card/Card";
// import { connect, useSelector, useDispatch } from "react-redux";
// import { filterCards, orderCards } from "../../redux/actions";
// import { useState } from "react";
// import style from "./favorites.module.css";

// const Favorites = ({ myFavorite }) => {
//   const favorites = useSelector((state) => state.myFavorite);
//   const dispatch = useDispatch();
//   const [aux, setAux] = useState(false);

//   const handleOrder = (event) => {
//     dispatch(orderCards(event.target.value));
//     setAux(true)
//   };

//   const handleFilter = (event) => {
//     dispatch(filterCards(event.target.value));
//   };

//   return (
//     <div>
//       {
//       <select onChange={handleOrder}>
//         <option value="A">Ascendente</option>
//         <option value="D">Descendente</option>
//       </select>
//       <select onChange={handleFilter}>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Genderless">Genderless</option>
//         <option value="unknow">unknow</option>
//         <option value="allCharacters">allCharacters</option>
//       </select>
    
//           <div className={style.favoriteList}>
//         myFavorite?.map(fav => {
//           <Card
//             key={fav.id}
//             id={fav.id}
//             name={fav.name}
//             species={fav.species}
//             gender={fav.gender}
//             image={fav.image}
//             />
//         }
//             })
//             </div>
        
//         )
//       }
      
      
//         </div>
    
// const mapStateToProps = (state) => {
//     return {
//       myFavorite: state.myFavorite,
//     };
//   };
// }
// export default connect(mapStateToProps, null)(Favorites);


import React from "react"; // Asegúrate de importar React si no lo has hecho
import Card from "../../components/Card/Card";
import { connect, useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
//import { useState } from "react";
import style from "./favorites.module.css";

const Favorites = ({ myFavorite }) => {
  const favorite = useSelector((state) => state.myFavorite);
  const dispatch = useDispatch();
  //const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    //setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">allCharacters</option>
      </select>
      <div className={style.favoriteList}>
        {favorite?.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
  };
};

export default connect(mapStateToProps, null)(Favorites);

