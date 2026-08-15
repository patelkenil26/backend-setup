class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static bedRequest(message = " Bes Request") {
    return new ApiError(400, message);
  }
  static unauthorized(message = "Unauthorized") {
    return new ApiError(400, message);
  }
  static conflict(message = "Conflict") {
    return new ApiError(400, message);
  }
}

export default ApiError;
