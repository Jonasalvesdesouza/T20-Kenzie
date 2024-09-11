import express, { json } from "express"
import { usersRouter } from "./route/users.route"

const app = express()

const port = 2500

app.use(json())
app.use("/users", usersRouter)

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`)
})