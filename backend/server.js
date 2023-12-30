require("dotenv").config()
const express = require("express");
const cors = require("cors");
const session = require("express-session");

const passport = require("./config/passport_config")
const Routes = require("./routes")
var MongoStore = require('connect-mongo');

const PORT = process.env.PORT || 8000;

const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

require("./config/database")()

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
  resave: false,
  cookie: { secure: false, maxAge: 30*24*60*60*1000 },
  proxy: true,
 
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, collection: 'sessions' })
}));

app.use(passport.initialize())
app.use(passport.session())

app.use("/", Routes);

app.listen(PORT, ()=>{console.log(`server listening on port ${PORT}`);})