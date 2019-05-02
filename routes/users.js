var express = require('express');
var router = express.Router();

var marked = require('marked');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get reference
var renderer = new marked.Renderer();

// Override function
renderer.paragraph = function (text) {
  return '<p>' + text + '</p>';
};

// Run marked
console.log(marked('> heading+'));

module.exports = router;