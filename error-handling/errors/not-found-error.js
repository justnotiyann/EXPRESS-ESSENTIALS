// import http-status-codes
const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./main-custom-error");

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode bad request
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
module.exports = NotFoundError;
