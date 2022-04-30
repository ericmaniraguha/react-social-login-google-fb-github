const cookieSession = require('cookie-session');
const express = require('express');
const app = express();
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');

const port = 5000;

app.use(
  cookieSession({
    name: 'session',
    keys: ['authenticate'],
    maxAge: 24 * 60 * 24 * 100,
  })
);

// unitialise my possport liblary
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    method: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

app.listen(port, () => {
  console.log('Server is running on port : ' + port);
});
