import { ADD_ADMIN, GET_ADMIN, REMOVE_ADMIN, UPDATE_ADMIN } from "../types/admin-types";


export default function adminReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ADMIN:
            return [...state];

        case REMOVE_ADMIN:
            let newUsersArray = state.filter((userItem) => {
                userItem.Id !== action.payload
            })
            return newUsersArray

        case GET_ADMIN:
            return [...state];

        default:
            return  state ;
    }
}  