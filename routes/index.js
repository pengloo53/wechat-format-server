var express = require('express');
var router = express.Router();

// fs
var fs = require('fs');
var path = require('path');

// wechat render
var wechatRender = require('./wechatRender.js');

var defaultTheme = require('../public/themes/default.js');
var lupengTheme = require('../public/themes/lupeng.js');

var themes = {
  default: defaultTheme,
  lupeng: lupengTheme
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get default
router.get('/ajax/default', function(req, res, next){
  var defaultThemeName = req.query.theme;
  var defaultMDPath = path.join(__dirname, '../public/default-content.md');
  fs.readFile(defaultMDPath, 'utf8', function(err, data){
    if(err){ throw err;}
    res.send({
      theme: themes[defaultThemeName],
      defaultMD: data
    });
  });
});

// Change Theme
router.get('/ajax/themes/:theme', function(req, res, next){
  var theme = req.params.theme;
  res.send({
    theme: themes[theme]
  });
});

// Wechat Render
router.post('/api/get/wechatRender', function(req, res, next){
  var MDFile = req.body.content;
  res.send('');
});

module.exports = router;
