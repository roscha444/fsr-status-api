const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (error, req, res, next) => {
    let err = { ...error };
    err.message = error.message;

    console.log(error.stack.red);

    res.status(err.statusCode || 500).json({
        success: false, error: err.message || 'ServerError'
    });
}

module.exports = errorHandler;