const express = require('express');
const PORT = 3210;
const server = express();

server.use(express.static(process.cwd()));

server.listen(PORT, () => {
  console.log(`Serving Durandal app on port ${PORT}`);
});
