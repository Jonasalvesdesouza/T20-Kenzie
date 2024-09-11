import express, { json, Request, Response } from "express"

const app = express()

app.use(json())

app.get("/", (req: Request, res: Response) => {
    res.send("Esta rota e do tipo Get e uma rota de leitura")
})
app.post("/", (req: Request, res: Response) => {
    res.send("Esta rota e do tipo post e uma rota de criacao")
})
app.put("/", (req: Request, res: Response) => {
    res.send("Esta rota e do tipo put e uma rota de atualizacao")
})
app.delete("/", (req: Request, res: Response) => {
    res.send("Esta rota e do tipo delete e uma rota de exclusao")
})

const port = 2500

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`)
})