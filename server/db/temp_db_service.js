import fs from 'fs-extra';

export const writeUserToTempDb = async (username, password, path) => {
    try {    
        const data = await fs.readJSON(path);
        data.push({ username, password });
        await fs.writeJSON(path, data);
        console.log('User added successfully!');
    } catch (error) {
        console.error(error);
    }
}

export const readUsersFromDb = async (path) => {
    try {
        const users = await fs.readJSON(path);
        return users;
    } catch (error) {
        console.error(error);
    }
}

export const validateNewUser = async (username, path) => {
    console.log('validating...');
    const userList = await readUsersFromDb(path);
    let repeatedUser;
    if (username !== '') {
        console.log('The current user list is ', userList);
        repeatedUser = userList.filter( item => { 
            console.log('the item is...', item['username']);
            console.log('the username is', username)
            return ( item['username'] == username )
        });
    }

    if (repeatedUser.length === 0) {
        return true;
    } else {
        return false;
    }
}