require('dotenv').config({})
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./models/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to the database
connectDB();

// Passport config
require('./config/passport')(passport);

// Middleware
app.use(cors({credentials:true,origin:true})); 
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
