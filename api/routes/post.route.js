/* import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { addPost, deletePosts, getPost, getPosts, updatePost } from "../controllers/post.controller.js";


const router = express.Router()

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePosts);

/* router.get("/test", (req, res)=>{
    console.log("router works")
}) */

//export default router; */