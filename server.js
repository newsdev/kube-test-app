'use strict';

const express = require('express');
const package_json = require('./package.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world. Version: ' + package_json.version + '.\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
