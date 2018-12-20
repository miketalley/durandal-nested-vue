const path = require('path');
const express = require('express');
const PORT = 3210;
const server = express();

server.all('*', (req, res, next) => {
  console.log(`Performing ${req.method} for ${req.url}`);
  next();
});

server.use(express.static(path.join(process.cwd(), 'dist')));

server.listen(PORT, () => {
  console.log(`Serving Durandal app on port ${PORT}`);
});
