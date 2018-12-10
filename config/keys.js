if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod")
} else {
  //if not production, send dev keys
  module.exports = require("./dev")
}
