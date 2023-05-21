const express = require('express');

const emojis = require('./emojis');
const pokemon = require('./pokemon');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/pokemon', pokemon);

module.exports = router;
