const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const { static } = express;

app.use(express.static(path.join(__dirname, './public')));
app.use('/api', require('./routes/index')); //all route files will go here
app.use(morgan('dev')); // info for the terminal about html requests

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, './kolindex.html'));
  } catch (error) {
    console.log(error);
  }
});

const run = async () => {
  try {
    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () =>
      console.log(`
      
      app listening on ${PORT}
      
      http://localhost:${PORT}/
  
      `)
    );
  } catch (error) {
    console.log(error);
  }
};

run();
