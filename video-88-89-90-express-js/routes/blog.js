const express = require('express');
const router = express.Router();

// This is Router Level Middlware
// Middleware for this specific route
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/:bloggerName', (req, res) => {
  res.send(`This is ${req.params.bloggerName} blog..!`);
});

module.exports = router;
