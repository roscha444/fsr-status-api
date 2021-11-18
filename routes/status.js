const express = require('express');
const router = express.Router();

const { getStatus, setOpen, setClose } = require('../controllers/status');

router.route('/').get(getStatus);

router.route('/open').put(setOpen);

router.route('/close').put(setClose);

module.exports = router;