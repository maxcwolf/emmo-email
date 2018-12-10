const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("cookie-session")
const keys = require("./config/keys")
const authRoutes = require("./routes/authRoutes")
require("./models/user") //this must be declared first since passport.js needs the user model
require("./services/passport")

//connect mongoose to MLab mongoDB instance
mongoose.connect(keys.mongoURI)

const app = express()

//apply cookie-session middleware before route handler
app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
//apply passport middleware before route handler
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
