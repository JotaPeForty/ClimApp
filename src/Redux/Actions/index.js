import axios from "axios";
export const GET_INFO = "GET_INFO";

export const infoCity = (city) => {
    return async (dispatch) => {
        const apiKey = "dd8f97a2062a52964afd7b57eacdaf66";
      try {
        const infoCity = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
        return dispatch({
          type: GET_INFO,
          payload: infoCity.data,
        });
      } catch (err) {
        console.error(err);
      }
    };
  };