
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "login":
            return {
                isAuth: true,
                isUser: action.payload.isUser,
                email: action.payload.email
            };

        case "logout":
            return {
                isAuth: false,
                isUser: false,
                email: undefined,
            }

        default:
            return state;
    }
}