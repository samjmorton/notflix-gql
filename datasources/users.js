const users = require("../data/users.json");
const _ = require("lodash");

class UsersAPI {
   getUser(userName) {
		 return _.find(users, ((user) => user.userName === userName))
	 }
}

module.exports = UsersAPI;
