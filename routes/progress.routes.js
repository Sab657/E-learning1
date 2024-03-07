const express = require('express');
const progress = require(' ../controller/progress.controller');
const router = express.Router();

router.get('/progresses', progress.controller.getProgress);
router.get('/progresses/:id', progress.controller.getProgress);
router.post('/progresses', progress.controller.createProgress);

router.put('/progresses/:id', progress.controller.updateProgress);
router.delete('/progresses/:id', progress.controller.deleteProgress);

module.exports = router;