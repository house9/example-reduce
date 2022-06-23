export enum ActionType {
  TOGGLE_VARIANT = "TOGGLE_VARIANT",
}

export type Action = { type: ActionType.TOGGLE_VARIANT };

export type State = {
  variant: string;
};

export const initialState: State = {
  variant: "light",
};

export function reducer(state: State, action: Action) {
  const { type } = action;

  console.log(type, action, state);

  switch (type) {
    case ActionType.TOGGLE_VARIANT: {
      const variant = state.variant === "light" ? "dark" : "light";

      return { ...state, variant };
    }
    default: {
      throw new Error(`unknown action ${type}`);
    }
  }
}
