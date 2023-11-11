import { Router } from "express";
import { getPosts, createPost } from "../controllers/post.controller";

const router = Router()

router.get('/posts', getPosts)
router.get('/posts/:id')
router.post('/posts', createPost)
router.delete('/posts/:id')
router.put('/posts/:id')