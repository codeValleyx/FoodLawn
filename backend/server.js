require("dotenv").config()
const express = require("express");
const session = require("express-session");

const User = require("./models/user")
const passport = require("./config/passport_config")
const Routes = require("./routes")

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

require("./config/database")()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// const initializePassport = require("./config/passport");
// initializePassport(passport);

app.use("/", Routes);

app.listen(PORT, ()=>{console.log(`server listening on port ${PORT}`);})