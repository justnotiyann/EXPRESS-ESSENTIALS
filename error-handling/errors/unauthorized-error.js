// import http-status-codes
const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./main-custom-error");

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode bad request
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
module.exports = UnauthorizedError;
