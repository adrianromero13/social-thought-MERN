const router = require('express').Router();
const {
  requireAuth,
  requireSignin,
} = require('../../../middlewares/authMiddlewares');
// import needed controllers

// router.route('/')
// .get(requireAuth, getCurrentUser);

module.exports = router;
