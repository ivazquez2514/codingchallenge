
export const type = 'CHANGE_MENU_STATUS';

const changeMenuStatus = menuStatus => ({
    type,
    payload: menuStatus
});

export default changeMenuStatus;