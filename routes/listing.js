const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const parser = multer({ storage: storage });
const ListingController = require("../controllers/listing.js");

router
  .route("/")
  //Index Route
  .get(wrapAsync(ListingController.index))
  //Create Route
  .post(
    isLoggedIn,
    parser.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.createListing)
  );

//new route
router.get("/new", isLoggedIn, ListingController.renderNewForm);

router
  .route("/:id")
  //show route
  .get(wrapAsync(ListingController.showListing))
  //Update route
  .put(
    isLoggedIn,
    isOwner,
    parser.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.updateListing)
  )
  //Delete route
  .delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.renderEditForm)
);

module.exports = router;
