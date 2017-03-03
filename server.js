import path from 'path';

import express from 'express';



const app = express(),
      PORT = process.env.PORT || 3000;



app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if(err) return console.log(`failed to start server on port ${PORT}`);
  console.log(`server starting on port ${PORT}`);

});
