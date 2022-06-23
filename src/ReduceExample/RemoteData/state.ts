import { Beer } from "./beer";

export enum ActionType {
  FETCH_BEER_REQUEST = "FETCH_BEER_REQUEST",
  FETCH_BEER_SUCCESS = "FETCH_BEER_SUCCESS",
  FETCH_BEER_FAILURE = "FETCH_BEER_FAILURE",
}

export type Action =
  | { type: ActionType.FETCH_BEER_REQUEST }
  | { type: ActionType.FETCH_BEER_SUCCESS; beers: Beer[] }
  | { type: ActionType.FETCH_BEER_FAILURE; error: Error };

export type State = {
  beers: Beer[];
  error?: Error;
  loading: boolean;
};

export const initialState: State = {
  loading: false,
  beers: [],
};

export function reducer(state: State, action: Action) {
  const { type } = action;

  console.log(type, action);

  switch (type) {
    case ActionType.FETCH_BEER_REQUEST: {
      return { ...state, loading: true };
    }
    case ActionType.FETCH_BEER_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    case ActionType.FETCH_BEER_SUCCESS: {
      return { ...state, loading: false, beers: action.beers };
    }
    default: {
      throw new Error(`unknown action ${type}`);
    }
  }
}
