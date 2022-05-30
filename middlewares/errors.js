import ErrorHandler from '../utils/errorHandler';

const handleError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = { ...err };
    error.message = err.message;

    // wrong mongoose object id error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    // handling mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack,
    });
};

export default handleError;
