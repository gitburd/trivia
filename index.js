const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/hi', (req, res) => {
    res.json({msg:'hi'})
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
  
  
  app.listen(port);
  console.log(`I'm listening on ${port}`);