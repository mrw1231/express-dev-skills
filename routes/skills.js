var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills.js');

// All actual paths begin with "/skills"
 
// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);

module.exports = router;
