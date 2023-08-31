import style from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions"
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorite,
}) {

  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };
  const [closeBtn, setCloseBtn] = useState(true);
  
  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    myFavorite.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    //eslint-disable-next-line
  }, [myFavorite]);

  const navigate = useNavigate();
  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className={style.cardContainer}>
     {closeBtn && (
        <button className={style.closeButton}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      )}
      <div>
      <button className={style.favoriteButton} onClick={handleFavorite}>{ isFav ? '❤️' : '🤍'}</button>
     </div>
     
      <div className={style.imageContainer}>
        <h2>{name}</h2>
        <img
          className={style.image}
          src={image}
          alt={name}
          onClick={navigateHandler}
        />
      </div>
      |
      <div>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {dispatch(addFavorite(character)) },
    removeFavorite: (id) => {dispatch(removeFavorite(id)) },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorite: state.myFavorite,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
