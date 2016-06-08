import express from 'express';
import orchestrate from 'orchestrate';

const TOKEN = '1d7f5da4-f33a-4559-b878-cb3b2838fb91';
const db = orchestrate(TOKEN);

const app = express();

app.param(['collection'], function (req, res, next, value) {
  req.collection = value;
  next();
});

app.get('/api/:collection', (req, res) => {
  const { collection } = req;
  db.list(collection).then(result => {
    res.json(result);
  });

});


app.get('/api/test', (req, res) => {
  res.json({
    hello: "world"
  });
});

app.post('/api/test/test', (req, res) => {
  res.json({
    hello: "world'"
  });
});

app.listen(8080, function(err) {
  if (err)
    return console.log(err);
  console.log('running on localhost:8080');
});