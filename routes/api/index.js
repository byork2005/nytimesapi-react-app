const router = require("express").Router();
const bookRoutes = require("./articles");
const apiRoutes = require("./apiRoutes");

// Book routes
router.use("/articles", bookRoutes);
router.use('/apiRoutes', apiRoutes);

module.exports = router;
