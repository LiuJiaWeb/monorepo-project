const express = require('express');
const router = express.Router();
const { addUser } = require('~src/api/admin/user/user.controller');

router._prefix = '/user';

router.post('/add-user', addUser);

router.post('/del-user');

router.post('/edit-user');

router.get('/get-user-info');

module.exports = router;
