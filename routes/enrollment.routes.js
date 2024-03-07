const express = require('express');
const enrollment = require(' ../controller/enrollment.controller');
const router = express.Router();

router.get('/enrollments', enrollment.controller.getEnrollment);
router.get('/enrollments/:id', enrollment.controller.getEnrollment);
router.post('/enrollments', enrollment.controller.createEnrollment);

router.put('/enrollments/:id', enrollment.controller.updateEnrollment);
router.delete('/enrollments /:id', enrollment.controller.deleteEnrollment );

module.exports = router;