"use strict";

class UserStorage {
    static #users = {id: ["woorimIT", "나개발", "김팀장"],
    password: ["1234", "1234", "1234"],
    name: ["우리밋", "개발","나대지"]
    };

    static getUsers(...fields) {
        const users=this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // console.log(newUsers,field);
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };
}



module.exports = UserStorage;