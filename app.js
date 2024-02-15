import express from "express"
import cors from "cors"
import conn from "./db/conn.js"
const app = express()

app.use(cors())
app.use(express.json())

conn()

import routes from "./routes/router.js"

app.use("/api", routes)

const port = process.env.PORT || 9001

app.listen(port)
