const router = require('express').Router();
const { signUp, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/singup', signUp);
router.post('/signin', requireSignIn, signIn);

module.exports = router;
