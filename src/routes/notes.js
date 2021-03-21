const { Router } = require('express');
const router = Router();
const notesCtrl = require('../controllers/notes');

router.route('/').post(notesCtrl.createNote);

router.route('/:id').get(notesCtrl.getNote);

router.route('/').get(notesCtrl.getNotes);

router.route('/:id').put(notesCtrl.updateNote);

router.route('/:id').delete(notesCtrl.deleteNote);

module.exports = router;
