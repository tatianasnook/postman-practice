const express = require('express');
const app = express();
const items = require('./Items');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    name: req.body.name,
    id: req.body.id,
    price: req.body.price
  };
  items.push(newItem);
  res.json(items);
});

app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const itemToBeUpdated = items.find(item => item.id === id);

  if (itemToBeUpdated) {
    const updateItem = req.body;
    items.forEach(item => {
      if(item.id === id){
        item = updateItem
        res.json({message: 'Item updated', item})
      }
    });
  } else {
    res.status(404).json({ message: `Item with ID ${id} not found` });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const itemToBeDeleted = items.find(item => item.id === id);

  if (itemToBeDeleted) {
    res.json({
      message: "Item deleted",
      items: items.filter(item => item.id !== id)
    });
  } else {
    res.status(404).json({ message: `Item with ID ${id} not found` });
  }
});

app.listen(4000, () => {
  console.log('Server is running on PORT 4000');
});
