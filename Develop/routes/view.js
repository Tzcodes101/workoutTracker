//require("express").router
//require path
const router = require("express").Router();
const path = require("path");

//router.get exercise, req, res
    //res.sendFile(path.join(__dirname, "../public/exercise.html"))
router.get("exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//reouter.get same as exercise but for stat