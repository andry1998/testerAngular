const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + 'dist/tester-angular'));
app.get('/*', function (req, res) {
  res.send("hello world");
})
app.listen(process.env.PORT || 4200);
