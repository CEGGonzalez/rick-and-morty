import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER,
  ORDER
} from "./action-types";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character
  }
}

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}
