const { Router } = require('express');
const router = Router();

const items = require('../Items');

router.get('/', (req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const newItem = {
    name: req.body.name,
    id: req.body.id,
    price: req.body.price
  };
  items.push(newItem);
  res.json(items);
});

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;