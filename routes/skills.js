var express = require('express');
const skills = require('../controllers/skills.js');
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
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
