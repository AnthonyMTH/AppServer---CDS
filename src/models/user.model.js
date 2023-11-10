import mongoose from "mongoose";

//Esquema de los usuarios servira mas adelante
const userSchema = new mongoose.Schema({
    username: {
        type: String, //Tipo de dato
        required: true, //Sirve para que sea requerido
        trim: true, //Sirve para eliminar espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, //Sirve para que sea unico y no se repitan emails en registros
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema) //Crea una coleccion de usuarios y los guarda en objeto, lo hace mongoose
