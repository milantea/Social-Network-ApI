const { connect, connection } = require("mongoose");

connect("mongo://localhost/userPosts", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
