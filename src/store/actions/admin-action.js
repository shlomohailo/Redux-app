import { ADD_ADMIN,GET_ADMIN,REMOVE_ADMIN,UPDATE_ADMIN} from "../types/admin-types"

const createAdminAction = (adminObj) => {
    return { type: ADD_ADMIN, payload: adminObj }
}

const adminAction = () => {
    return { type: GET_ADMIN }
}
export {
    createAdminAction,
    adminAction
}