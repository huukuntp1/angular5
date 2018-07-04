var User = require('../models/user');
var config = require('../../config');
var secrectKey = config.secrectKey;
var jsonwebtoken = require('jsonwebtoken');

createToken = ({_id, name, username}) => {
  var token = jsonwebtoken.sign({
    _id,
    name,
    username
  }, secrectKey, {
    expiresIn: 1440
  })

  return token;
}

module.exports = (app, express) => {
  var api = express.Router();

  api.post('/signup', (req, res) => {
    var user = new User  ({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    });

    user.save((err) => {      
      if (err) {
        res.send(err);
        return;
      }

      res.json({ message: `User have been create, Description: ${req.body.name} ${req.body.username} ${req.body.password}` });
    })
  })

  api.get('/users', (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err);
        return;
      }

      res.json(users);
    })
  })

  api.post('/login', (req, res) => {
    User.findOne({
      username: req.body.username
    }).select('password').exec((err, user) => {
      if (err) throw err;
      
      if (!user) {

        res.send({ message: "User does exits" });
      } else if (user) {
        var validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {

          res.send({ message: "Invalid Password" });
        } else {
          var token = this.createToken(user);

          res.json({
            success: true,
            message: 'Successfuly login!!!!',
            token
          })
        }
      }
    })
  })

  return api;
}