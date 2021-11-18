const asyncHandler = require('../middleware/async.js');
const ErrorResponse = require('../utils/ErrorResponse');

let open = true;

exports.getStatus = asyncHandler(async (req, res, next) => {

    res.status(200).json({
        success: true, open: open
    });

});

exports.setOpen = asyncHandler(async (req, res, next) => {

    const { apiSecret } = req.body;

    if (process.env.API_SECRET !== apiSecret) {
        return next(new ErrorResponse('Invalid API SECRET', 401));
    }

    open = true;

    res.status(201).json({
        success: true, open: open
    });

});

exports.setClose = asyncHandler(async (req, res, next) => {

    const { apiSecret } = req.body;

    if (process.env.API_SECRET !== apiSecret) {
        return next(new ErrorResponse('Invalid API SECRET', 401));
    }

    open = false;

    res.status(201).json({
        success: true, open: open
    });

});
