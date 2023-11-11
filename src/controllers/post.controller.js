import Post from '../models/post.model.js'

export const getPosts = async (req, res) => {
    const posts = Post.find({
        user: req.user.id       // Funciona como un where
    }).populate('user')         // Dame los datos del usuario

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