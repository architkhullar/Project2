'user strict';

var mongoose = require('mongoose'),
  admin = mongoose.model('Admin');


  exports.create_admin = function(req, res) {
    var newAdmin = new Admin(req.body);
    newAdmin.save(function(err, admin) {
      if (err) {
        return res.status(400).send({
          message: err, status:'400'
        });
      } else {
        return res.json({name:newAdmin.name, message: 'admin submitted successfully', status:'200'});
        // return res.json({message: 'Admin created successfully', status:'200'});
        }
    });
  };

  exports.admin_login = function(req, res) {
    Admin.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, admin) {
      if (err)  throw err;
      if (!admin) {
      res.status(401).json({ message: 'Authentication failed. Admin not found.', status: '401' });
    } else if (admin) {
      console.log("done");
      return res.json({name: admin.name, message: 'Authentication successful, Admin logged in', status: '200' });

    }
  });
};
