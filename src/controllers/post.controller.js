import Post from '../models/post.model.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getMyPosts = async (req, res) => {
    const posts = await Post.find({
        user: req.user.id
    }).populate('user')         // Dame los datos del usuario

    res.json(posts)
}

export const getAllPosts = async (req, res) => {
    const posts = await Post.find()

    res.json(posts)
}

export const createPost = async (req, res) => {
    const { description, photo, date } = req.body
    let image

    if (req.files.image) {
        const res = await uploadImage(req.files.image.tempFilePath)
        image = {
            url: res.secure_url,
            public_id: res.public_id
        }
        await fs.remove(req.files.image.tempFilePath)
    }

    const newPost = new Post({
        description,
        photo: image,
        date,
        user: req.user.id
    })

    const savedPost = await newPost.save()

    res.json(savedPost)
}

export const getPost = async (req, res) => {
    const postFound = await Post.findById(req.params.id)
    if (!postFound) return res.status(404).json({message: 'Post not found'})

    res.json(postFound)
}

export const updatePost = async (req, res) => {
    const postFound = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true   // Devuelve el dato nuevo
    })
    if (!postFound) return res.status(404).json({message: 'Post not found'})

    res.json(postFound)
}

export const deletePost = async (req, res) => {
    const postFound = await Post.findByIdAndDelete(req.params.id)
    if (!postFound) return res.status(404).json({message: 'Post not found'})

    if (postFound.photo.public_id) {
    await deleteImage(postFound.photo.public_id)
    }

    res.sendStatus(204)
}