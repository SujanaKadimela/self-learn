module.exports = {
    login: function (req, res) {
        res.send('requested for login');
    },

    signup: function (req, res) {
        if (req.body.username.length <= 3) {
            res.send(404, 'Minimum length expected is 3 characters');
        }
        console.log(req.body.username);
        res.send('requested for signup');
    }
};