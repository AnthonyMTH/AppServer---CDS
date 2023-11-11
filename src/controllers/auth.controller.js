import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  console.log(req.body);
  const { email, password, username, phone, address, photo } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      phone,
      address,
      photo,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      phone: userSaved.phone,
      address: userSaved.address,
      photo: userSaved.photo,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json(["User not found"]);

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) return res.status(400).json(["Incorrect password"]);

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token); // crea la cookie para la respuesta

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      phone: userFound.phone,
      address: userFound.address,
      photo: userFound.photo,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    // vacía el token
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
