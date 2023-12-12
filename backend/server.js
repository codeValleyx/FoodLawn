require("dotenv").config()
const express = require("express");
const passport = require("passport");
const session = require("express-session");

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

const initializePassport = require("./config/passport");
initializePassport(passport);

app.use("/", Routes);

app.listen(PORT, ()=>{console.log(`server listening on port ${PORT}`);})