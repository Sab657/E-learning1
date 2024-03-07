const express = require('express');
const resource = require(' ../controller/resource.controller');
const router = express.Router();

router.get('/resources', resource.controller.getResource);
router.get('/resources/:id', resource.controller.getResource);
router.post('/resources', resource.controller.createResource);

router.put('/resources/:id', resource.controller.updateResource);
router.delete('/resources/:id', resource.controller.deleteResource);

module.exports = router;