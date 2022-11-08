const router = require('express').Router();
const dashboardRoutes=require("./dashboard-routes");

// all of these routes are prefixed with '/api'
router.use('/dashboard', dashboardRoutes);

module.exports=router;