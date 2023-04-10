exports.notFoundMiddleware = (req, res) => {
  res.status(404).json({ code: 404, status: "ROUTES NOT FOUND" });
};
