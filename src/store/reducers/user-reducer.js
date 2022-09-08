import { ADD_USER, REMOVE_USER, GET_BY_ID, UPDATE_USER } from "../types/user-types";
export default function usersReducer({ users }, action) {
    switch (action.type) {
        case ADD_USER:
            return {users:[...users, action.payload]};

        case REMOVE_USER:
            newarray = users.filter((useritem) => {
                useritem.Id == action.payload.Id
            });
            return [...newarray];

        case GET_BY_ID:
            return [...users];

        case UPDATE_USER:
            let newarray = users.filter((useritem) => {
                useritem.Id == action.payload.Id
            });
            users[users.indexOf(newarray[0])] = action.payload
            return [...users]
        default:
            return { users };
    }
}  