// import http-status-codes
const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./main-custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode bad request
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = UnauthenticatedError;
