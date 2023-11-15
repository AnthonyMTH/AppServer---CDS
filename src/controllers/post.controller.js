import Post from '../models/post.model.js'

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
    const newPost = new Post({
        description,
        photo,
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

    res.sendStatus(204)
}