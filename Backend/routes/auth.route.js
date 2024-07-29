

const { signup, login ,forgotPassword , resetPassword} = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = (app) => {
    // Route for user signup
    app.post('/signup', authMiddleware.verifySignUpBody, signup);

    // Route for user signin
    app.post('/signin', authMiddleware.verifySigninBody, login);

    // Route for forgot password
    app.post('/forgot-password', forgotPassword);

    // Route for reset password
    app.post('/reset-password/', resetPassword);

};

