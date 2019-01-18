const Login = require('../models/login');    
    
exports.login = function (req, res) {
    Login.find({userName: 'sujana'}, (err, logins) => {
        if(err) {
            res.send(404, 'unable to connect to database');
        }
        res.send(200, logins);
    })
};

exports.signup = function (req, res) {
    if (req.body.userName.length <= 3) {
        res.send(404, 'Minimum length expected is 3 characters');
    }
    const user = new Login({userName: req.body.userName, password: req.body.password});
    user.save((err, user) => {
        if(err){
            res.send(404,'Unable to signup');
        }
        res.send(200, 'signup Successful');
    })
}
