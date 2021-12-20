import{
    GET_INFO
  } from "../Actions/index.js"
  
  
  const inicialState = {
    data: [],
   
  };
  
  export default function reducer(state = inicialState, { type, payload }) {
    switch (type) {
      case GET_INFO:
        return {
          ...state,
          data: payload,
        };
      default:
        return state;
    }
  }
  