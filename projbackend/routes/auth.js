var express = require('express');
var router = express.Router()

const { check, validationResult } = require('express-validator');
const { signout, signup,signin, isSignedIn} = require("../controllers/auth")

router.post("/signup", [
    check("name", "name should be atleast 3").isLength({ min: 3 }),
    check("email", "email not valid").isEmail(),
    check("password", "password not valid").isLength({ min: 3 })
], signup)


router.get("/signout", signout);


router.post("/signin", [
    check("email", "email not valid").isEmail(),
    check("password", "password is requireed").isLength({ min: 3 })
], signin)
router.get("/signout", signout);

router.get("/testroute",isSignedIn ,(req,res)=>{
    res.json(req.auth);
});


module.exports = router;