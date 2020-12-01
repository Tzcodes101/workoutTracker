//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const apiRoutes = require("./routes/api");
// const viewRoutes = require("./routes/view");

//variables
const PORT = process.env.PORT || 3000;
// const db = require("./models");
const app = express();

//app.use
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose.connect
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, useFindAndModify: false }); 


//routes
app.use(require("./routes/api"));
app.use(require("./routes/view"));

//app.listen
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}!`);
});