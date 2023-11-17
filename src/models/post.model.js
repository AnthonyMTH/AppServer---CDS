import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        url: String,
        public_id: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Post', postSchema)