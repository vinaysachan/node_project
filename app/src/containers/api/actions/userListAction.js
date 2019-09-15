const usertask          =   require('./../../../data/tasks/userTask');

module.exports = async () => {
    const users = usertask.userList().then(data => {
        return data;
    }).catch(error => {
        throw error;
    });
    return users;
}