const express = require('express');
const router = express.Router();
const { getSystemConfig } = require('~src/api/admin/config/config.controller');

router._prefix = '/config';

router.get('/get-system-config', getSystemConfig);

module.exports = router;
