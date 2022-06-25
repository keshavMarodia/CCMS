const express = require('express');

const router = express.Router();

const demoController = require('../controllers/demo');

router.post('/demo' , demoController.firstfunc);

module.exports= router;