import { Request, Response } from "express" 
import { IUser } from "../interfaces/users.interfaces"
import { generateId, usersDatabase } from "../database/database"

export class UsersControllers{

    registerUser(req: Request, res: Response): Response{
        const { name, email } = req.body

        const newUser: IUser = {
            id: generateId(),
            name,
            email,
        }

        usersDatabase.push(newUser)

        return res.status(201).json({user: newUser, message: "Usuario cadastrado com seucesso!"})
    }

}
