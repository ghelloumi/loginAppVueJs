const User = require('../../models/user.model');

exports.createUser = (req, res) => {
  let user = new User.userSchema({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone,
    gender: req.body.gender,
  });
  
  user.save((err) => {
    if (err) return next(err);
    res.send('User Created successfully');
  });
};

exports.loginUser = (req, res) => {
  console.log(login)
}
