import axios from "axios";
import { Action, ActionType } from "./state";

export function fetchBeers(dispatch: React.Dispatch<Action>) {
  dispatch({ type: ActionType.FETCH_BEER_REQUEST });

  axios
    .get("https://api.punkapi.com/v2/beers")
    .then((response) => {
      dispatch({ type: ActionType.FETCH_BEER_SUCCESS, beers: response.data });
    })
    .catch((error) => {
      dispatch({ type: ActionType.FETCH_BEER_FAILURE, error });
    });
}
