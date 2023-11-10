import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const {email,password,username} = req.body; 

    try{ 
        
        const passwordHash = await bcrypt.hash(password, 10);//Encripta la contraseña
        
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
        const userSaved = await newUser.save();//Lo guarda en la base de datos
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        });
    } catch(error){
        console.log(error);
    }

};//Exportamos una constante register para el codigo 

export const login = (req, res) => {
    res.send('login');
};//Exportamos una constante login para el codigo 