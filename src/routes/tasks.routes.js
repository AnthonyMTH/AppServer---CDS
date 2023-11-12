import { Router } from "express";
import { authRequire } from "../middlewares/validatetoken.js";
import {getTasks,getTask,createTask,deleteTask,updateTask} from "../controllers/task.controller.js"
const router = Router();

router.get('/tasks', authRequire,getTasks)
router.get('/tasks/:id', authRequire,getTask)
router.post('/tasks', authRequire,createTask)
router.delete('/tasks/:id', authRequire,deleteTask)
router.put('/tasks/:id', authRequire,updateTask)

export default router