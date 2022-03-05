const getUserName = state => state?.auth?.name?.name;
const getIsLoggedIn = state => state?.auth?.isLoggedIn;

export { getUserName, getIsLoggedIn };
