import { Router } from "express";
import { getPosts, createPost, getPost, deletePost, updatePost } from "../controllers/post.controller.js";

const router = Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.put('/posts/:id', updatePost)

export default router