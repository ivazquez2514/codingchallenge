const initialState = {
    menuStatus: false
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'CHANGE_MENU_STATUS':
            console.log('payload', payload);
            return {
                ...state,
                menuStatus: payload
            }
        default:
            return state;
    }
}