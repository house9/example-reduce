import { reducer, ActionType } from "./state";

describe("reducer", () => {
  it("toggles variant from light to dark", () => {
    const state = { variant: "light" };
    const newState = reducer(state, { type: ActionType.TOGGLE_VARIANT });
    expect(newState.variant).toEqual("dark");
  });

  it("toggles variant from dark to light", () => {
    const state = { variant: "dark" };
    const newState = reducer(state, { type: ActionType.TOGGLE_VARIANT });
    expect(newState.variant).toEqual("light");
  });
});
