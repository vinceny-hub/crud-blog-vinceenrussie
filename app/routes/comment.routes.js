const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const comments = require("../controllers/comment.controller");
const multer = require('../middleware/multer-config')


  // Create a new Comment
  router.post("/", auth, multer, comments.createComment);

  // Retrieve all Comments
  router.get("/", comments.findAll);

  // Retrieve all published Posts
  router.get("/published", auth, comments.findAllPublished);

  // Retrieve a single Comment with id
  router.get("/:id", comments.findOne);

  // Update a Comment with id
  router.put("/:id", auth, multer, comments.update);

  // Delete a Comment with id
  // router.delete("/:id", auth, comments.delete);

  router.delete("/:id", auth, comments.deletePostComment);  // route to delete a comment of a post

  // Delete all Comments
  router.delete("/", auth, comments.deleteAll);


module.exports = router;