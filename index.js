const express = require("express");
const errorHandlerMiddleware = require("./error-handling/middleware/handle-errors.middleware");
const {
  notFoundMiddleware,
} = require("./error-handling/middleware/not-found.middleware");
const app = express();

/**
 *
 * Other routes and configuration here
 *
 */

// Use middleware to handle error
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(3000, () => console.log("Server up and runnning"));
