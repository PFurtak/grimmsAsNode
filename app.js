const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

const pageOneController = require('./routes/pageOne');
// pageTwoController = require('./routes/pageTwo'),
// pageThreeController = require('./routes/pageThree'),
// pageFourController = require('./routes/pageFour'),
// pageFiveController = require('./routes/pageFive'),
// pageSixController = require('./routes/pageSix'),
// pageSevenController = require('./routes/pageSeven'),
// pageEightController = require('./routes/pageEight');

app.use('/', pageOneController);
// app.use('/page2', pageTwoController);
// app.use('/page3', pageThreeController);
// app.use('/page4', pageFourController);
// app.use('/page5', pageFiveController);
// app.use('/page6', pageSixController);
// app.use('/page7', pageSevenController);
// app.use('/page8', pageEightController);
