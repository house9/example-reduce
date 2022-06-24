import { reducer, ActionType } from "./state";

describe("reducer", () => {
  describe("FETCH_BEER_REQUEST", () => {
    it("sets loading to true", () => {
      const state = { loading: false };
      const newState = reducer(state, { type: ActionType.FETCH_BEER_REQUEST });
      expect(newState.loading).toEqual(true);
    });
  });

  describe("FETCH_BEER_FAILURE", () => {
    it("sets loading to false", () => {
      const state = { loading: true };
      const error = new Error("TEST");
      const newState = reducer(state, {
        type: ActionType.FETCH_BEER_FAILURE,
        error,
      });
      expect(newState.loading).toEqual(false);
    });

    it("sets the error", () => {
      const state = {};
      const error = new Error("TEST");
      const newState = reducer(state, {
        type: ActionType.FETCH_BEER_FAILURE,
        error,
      });
      expect(newState.error).toEqual(error);
    });
  });

  describe("FETCH_BEER_SUCCESS", () => {
    it("sets loading to false", () => {
      const state = { loading: true };
      const newState = reducer(state, {
        type: ActionType.FETCH_BEER_SUCCESS,
        beers: [],
      });
      expect(newState.loading).toEqual(false);
    });

    it("sets the error", () => {
      const state = {};
      const newState = reducer(state, {
        type: ActionType.FETCH_BEER_SUCCESS,
        beers: [{}, {}],
      });
      expect(newState.beers.length).toEqual(2);
    });
  });
});
