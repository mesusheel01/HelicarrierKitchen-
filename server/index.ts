import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3002

// req.body accepting middleware
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.json({
        msg: "Hi server is live!"
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})