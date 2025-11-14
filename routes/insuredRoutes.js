const express = require('express');
const router = express.Router();
const { createInsured, getAllInsured } = require('../controllers/insuredController');

router.post('/', createInsured);
router.get('/', getAllInsured);

module.exports = router;