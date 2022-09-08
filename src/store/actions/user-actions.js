import { ADD_USER,GET_BY_ID,REMOVE_USER,UPDATE_USER } from "../types/user-types"

const createUserAction = (userObj) => {
    return { type: ADD_USER, payload: userObj }
}

const userAction = () => {
    return { type: USER }
}
export {
    createUserAction,
    userAction
}
