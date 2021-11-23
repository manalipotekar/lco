const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth")
const {getUserById}=require("../controllers/user");
const { getProductById,createProduct,getProduct,photo,updateProduct,deleteProduct,getAllProducts,
    getAllUniqueCategories}=require("../controllers/product")

//all about param
router.param("userId",getUserById);
router.param("productId",getProductById);

//all of actual routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);

//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId");

//update route
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

//delete
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct );

//listing
router.get("/products",getAllProducts)


router.get("products/categories",getAllUniqueCategories)
module.exports = router;