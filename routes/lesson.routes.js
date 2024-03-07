const express = require('express');
const lesson = require(' ../controller/lesson.controller');
const router = express.Router();

router.get('/lessons', lesson.controller.getLesson);
router.get('/lessons/:id', lesson.controller.getLesson);
router.post('/lessons', lesson.controller.createLesson);

router.put('/lessons/:id', lesson.controller.updateLesson);
router.delete('/lessons /:id', lesson.controller.deleteLesson );

module.exports = router;