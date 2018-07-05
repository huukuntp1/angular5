var User = require('../models/user');
var Product = require('../models/product');
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
          var token = createToken(user);

          res.json({
            success: true,
            message: 'Successfuly login!!!!',
            token
          })
        }
      }
    })
  })

  api.use(function (req, res , next) {
    console.log('somebody just come to our app!!!!!!!!!!!!!!!11');
    var token = req.body.token || req.param('token') || req.headers['authorization'];
    
    if(token) {
      jsonwebtoken.verify(token, secrectKey, (err, decoded) => {
        if (err) { 
          res.status(403).send({ success: false, message: 'Failed to authenticate user' });
        } else {
          req.decoded = decoded;
          next();
        }
      })
    } else {
      res.status(403).send({ success: false, message: 'No token provied' });
    }
  })

  api.get('/', (req, res) => {
    res.json(res)
  })

  api.route('/product')
    .post((req, res) => {
      var product = new Product({
        createBy: req.decoded.id,
        content: req.body.content
      })

      product.save((err) => {
        if(err) {
          res.send(err);
          return
        }

        res.json({ message: 'New product Created !!!!' });
      })
    })
    .get((req, res) => {
      Product.find({ createBy: req.decoded.id }, (err, product) => {
        if(err) {

          res.send(err);
          return;
        }

        res.json(product);
      })
    })
  
  api.get('/me', (req, res) => {
    res.json(req.decoded);
  })

  return api;
}