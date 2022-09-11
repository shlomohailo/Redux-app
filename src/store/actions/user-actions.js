import { CREATE_USER, USER } from "./user-types"

const createUserAction = (userObj) => {
    return { type: CREATE_USER, payload: userObj }
}

const userAction = () => {
    return { type: USER }
}
export {
    createUserAction,
    userAction
}