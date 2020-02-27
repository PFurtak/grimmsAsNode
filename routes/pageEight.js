const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('template', {
    locals: {
      title: 'The Sea Hare'
    },
    partials: {
      partial: 'page8'
    }
  });
});

module.exports = router;
