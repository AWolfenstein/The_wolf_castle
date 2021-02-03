export const setInStorage = ({key, value}) =>
    localStorage.setItem(key, JSON.stringify(value));

export const getFromStorage = key => {
    const value = localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }

    return console.log(' MI NE MOZHEM DOSTAT ITEM');
};

export const removeFromStorage = key => localStorage.removeItem(key);

export const saveAuthInfo = ({token}) => {
    setInStorage({key: 'authenticationToken', value: token});
};

export default saveAuthInfo;
