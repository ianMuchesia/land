const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};


const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);


const attachCookiesToResponse = ({ res, user }) => {
  // Create a JWT token using user payload
  const token = createJWT({ payload: user });

  // Calculate the expiration time (2 days in milliseconds)
  const twoDays = 1000 * 60 * 60 * 24 * 2;

  // Attach the token as a cookie to the response
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + twoDays),
    signed: true, // Sign the cookie value
    secure: process.env.NODE_ENV === 'production',
  });
};


  module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
  };
  
  