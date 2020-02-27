const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('template', {
    locals: {
      title: 'The Sea Hare'
    },
    partials: {
      partial: 'page3'
    }
  });
});

module.exports = router;
