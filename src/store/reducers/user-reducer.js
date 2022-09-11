import { ADD_USER, REMOVE_USER, GET_BY_ID, UPDATE_USER } from "../types/user-types";


export default function usersReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];

        case REMOVE_USER:
           let newarray = users.filter((useritem) => {
                useritem.Id == action.payload.Id
            });
            return [...newarray];

        case GET_BY_ID:
            return state = [...state];

        case UPDATE_USER:
            let newArray = state
            state.filter((userItem) => {
                userItem.Id == action.payload.Id
            })
            state[state.indexOf(newArray[0])] = action.payload;
            return {state:[...state]}
        default:
            return  state ;
    }
}  