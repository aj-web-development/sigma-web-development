const express = require('express');
const router = express.Router();

router.get('/:shopName', (req, res) => {
  res.send(`Shop Name is ${req.params.shopName}..!`);
});

module.exports = router;
