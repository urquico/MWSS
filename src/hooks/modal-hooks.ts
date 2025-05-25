/**
 * State interface defines the shape of the state object used in the filterReducer.
 * deleteOpen: stores the state of the delete modal (true if open, false if closed).
 * finishOpen: stores the state of the finish modal (true if open, false if closed).
 *
 */
export interface State {
  deleteOpen: boolean;
  finishOpen: boolean;
}

/**
 * Action interface defines the shape of the action object used in the filterReducer.
 * type: specifies the type of action to be performed ('DELETE_OPEN', 'DELETE_CLOSE', 'FINISH_OPEN', 'FINISH_CLOSE').
 * payload: carries the data (true or false) to update the state.
 */
export interface Action {
  type: 'DELETE_OPEN' | 'DELETE_CLOSE' | 'FINISH_OPEN' | 'FINISH_CLOSE';
  payload: boolean;
}

/**
 * modalReducer is a reducer function that updates the state based on the action type.
 * @param state - the current state object.
 * @param action - the action object containing the type and payload.
 * @returns the new state object after applying the action.
 */
export const modalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'DELETE_OPEN':
      return {
        ...state,
        deleteOpen: action.payload,
      };
    case 'DELETE_CLOSE':
      return {
        ...state,
        deleteOpen: action.payload,
      };
    case 'FINISH_OPEN':
      return {
        ...state,
        finishOpen: action.payload,
      };
    case 'FINISH_CLOSE':
      return {
        ...state,
        finishOpen: action.payload,
      };
    default:
      return state;
  }
};
