const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);
    if (err.name === "CastError") {
      error = {
        status: 400,
        message: `Resource not found. Invalid: ${err.path}`,
      };
    }
    if (err.code === 11000) {
      error = {
        status: 400,
        message: `Duplicate field value entered: ${Object.keys(err.keyValue)}`,
      };
    }
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors)
        .map((val) => val.message)
        .join(", ");
      error = {
        status: 400,
        message: `Validation Error: ${message}`,
      };
    }
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
