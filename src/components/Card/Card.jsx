import style from "./card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={image}
          alt={name}
          onClick={navigateHandler}
        />
        <button className={style.closeButton} onClick={() => onClose(id)}>
          X
        </button>
      </div>
    |

      <div>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
