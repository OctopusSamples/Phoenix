var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Phoenix: ' + process.env.phoenix_tenant,
    tenant: process.env.phoenix_tenant,
    environment: process.env.phoenix_env,
    machine: process.env.phoenix_machine,
    deployed: process.env.phoenix_deployed,
    logo: process.env.phoenix_logo
  });
});

module.exports = router;
