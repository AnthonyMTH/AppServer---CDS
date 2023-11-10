import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://Carlos:Pollosal@cluster0.zdfrryr.mongodb.net/?retryWrites=true&w=majority")
        console.log("DB is connected")
    } catch{
        console.error(err)
    }
};
