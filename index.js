const express = require('express');
const app = express();
const items = require('./items');

console.log(items)

// app.get('api/items', (req, res) => {
//   res.json(items);
// })

app.listen(4000, () => {
  console.log(" It's working - PORT4000")
})