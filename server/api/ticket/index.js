'use strict';

var express = require('express');
var controller = require('./ticket.controller');
var auth = require('../../auth/auth.service.js');

var router = express.Router();

// router.use(auth.isAuthenticated());

router.get('/getStats', controller.getStats);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;