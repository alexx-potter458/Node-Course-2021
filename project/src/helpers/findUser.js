const findUser = (user, pass) => {
    if(user === 'admin' && pass === '1234') {
        return {user, };
    } else {
        return null;
    }
}

module.exports = findUser;