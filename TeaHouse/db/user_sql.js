const user = {
    /**
     * find username
     */
    queryUsername(option) {
        return 'select * from user where username like "%' + option.username + '%"';
        // return 'select * from user where username =  {admin}';
    },
    queryPassword(option) {
        return 'select * from user where (username like "%' + option.username + '%") and (password like "%' + option.password + '%")';
    },
    token() {
        let jwt = require('jsonwebtoken')

        //user
        let payload = 'admin@test.com';
        //token
        let secret = 'ga0m1ng';
        //creat
        let token = jwt.sign(payload, secret);
        return token;
    }
}

exports = module.exports = user;