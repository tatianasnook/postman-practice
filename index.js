const express = require('express');
const app = express();

const itemsRoute = require('./route/FetchItems');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/items/', itemsRoute)

app.listen(4000, () => {
  console.log('Server is running on PORT 4000');
});
