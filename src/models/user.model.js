import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        trim: true, //Sirve para eliminar espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true //Sirve para que devuelva la fecha de creación y actualización de los datos
})

export default mongoose.model('User', userSchema); 
