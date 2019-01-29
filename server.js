const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const mongoose = require ('mongoose');

const app = express();
const DB = require("./models");
const apiRoutes = require("./routers/api")(app);

const bodyParser = require('body-parser')


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(bodyParser.json())


// If developed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/NTHdatingSite";

  //connect mongoose to our database
  mongoose.connect(db, function (error){
    if (error) {
      console.log(error);
    }
    else {
      console.log("NTH mongoose connection is sucessful");
    }

  });


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
