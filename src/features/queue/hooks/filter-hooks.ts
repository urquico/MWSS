/**
 * State interface defines the shape of the state object used in the filterReducer.
 * selectedOffice: stores the selected office ID or null if no office is selected.
 * selectedService: stores the selected service ID or null if no service is selected.
 */
export interface State {
  selectedOffice: string | null;
  selectedService: string | null;
}

/**
 * Action interface defines the shape of the action object used in the filterReducer.
 * type: specifies the type of action to be performed ('SELECT_OFFICE' or 'SELECT_SERVICE').
 * payload: carries the data (office ID or service ID) to update the state.
 */
export interface Action {
  type: 'SELECT_OFFICE' | 'SELECT_SERVICE';
  payload: string | null;
}

/**
 * filterReducer is a reducer function that updates the state based on the action type.
 * @param state - the current state object.
 * @param action - the action object containing the type and payload.
 * @returns the new state object after applying the action.
 */
export const filterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELECT_OFFICE':
      // Updates the selectedOffice in the state with the payload value.
      return {
        ...state,
        selectedOffice: action.payload,
      };
    case 'SELECT_SERVICE':
      // Updates the selectedService in the state with the payload value.
      return {
        ...state,
        selectedService: action.payload,
      };

    default:
      // Returns the current state if the action type is not recognized.
      return state;
  }
};
