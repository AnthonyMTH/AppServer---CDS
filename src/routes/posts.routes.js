import { Router } from "express";
import { getPosts, createPost, getPost, deletePost, updatePost } from "../controllers/post.controller.js";
import { authRequire } from "../middlewares/validatetoken.js";

const router = Router()

router.get('/posts', authRequire, getPosts)
router.get('/posts/:id', authRequire, getPost)
router.post('/posts', authRequire, createPost)
router.delete('/posts/:id', authRequire, deletePost)
router.put('/posts/:id', authRequire, updatePost)

export default router