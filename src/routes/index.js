const express = require('express');
const router = express.Router();


module.exports = function (rapidManager) {
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });

  router.post('/test/:river', function (req, response, next) {
    rapidManager.publishAndWait('test', 10, req.body, result => {
      response.send(`respond with a resource: ${result.content.toString()}`);
    });
  });

  return router;
};
