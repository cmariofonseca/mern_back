const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controllers/users');

router.route('/').post(usersCtrl.createUser);

router.route('/:id').get(usersCtrl.getUser);

router.route('/').get(usersCtrl.getUsers);

router.route('/:id').put(usersCtrl.updateUser);

router.route('/:id').delete(usersCtrl.deleteUser);

module.exports = router;
