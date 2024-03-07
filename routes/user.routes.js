const express = require('express');
const user = require(' ../controller/user.controller');
const router = express.Router();

router.get('/users', user.controller.getUser);
router.get('/users/:id', user.controller.getUser);
router.post('/users', user.controller.createUser);

router.put('/users/:id', user.controller.updateUser);
router.delete('/users/:id', user.controller.deleteUser);

module.exports = router;