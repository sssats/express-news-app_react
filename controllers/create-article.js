var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('./../models/article');

var Article = mongoose.model('Article', article);

router.get('/list', function(req, res, next) {
  console.log('here');
  res.render('articles')
});

function savePost(data, picture, res) {
  var article = new Article({title: data.title, body: data.body, picture: picture});
  article.save(function(err, article, success) {
    if (err) {
      res.json({error: err});
    } else if (success === 1) {
      res.json({success: true, article: article});
    }
  });
}

router.post('/create', function(req, res, next) {
  var data = req.body;
  var dateHash = Date.now();
  console.log(data);
  if (req.files) {
    req.files.image.mv('./public/images/' + dateHash + '_' + req.files.image.name, function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        var picture = dateHash + '_' + req.files.image.name;
        savePost(data, picture, res);
      }
    });
  } else {
    savePost(data, '', res);
  }
});

module.exports = router;
