export default temp_db = () => {
    const users = [];
    const addUser = (username, password) => {
        users.push({username, password});
    }
    return { users, addUser}
}