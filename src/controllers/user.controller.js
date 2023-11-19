import User from '../models/user.model.js'

export const getUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json('No such User')
        }
    } catch (error) {
        
    }
}