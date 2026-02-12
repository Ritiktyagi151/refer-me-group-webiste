const express = require('express');
const router = express.Router();
const navbarController = require('../controllers/navbarController');

// GET: https://refermegroup.com/api/navbar
router.get('/', navbarController.getNavbar);

// PUT: https://refermegroup.com/api/navbar
router.put('/', navbarController.updateNavbar);

module.exports = router;