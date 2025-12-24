import express from 'express'
import productsRouter from './products.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(express.json())

app.use('/products', productsRouter)

app.get("/", (req, res) => {
    res.send("Hello world from out cool app!")
})

app.get("/message", (req, res) => {
    res.json({ message: "Hello from your express Server" })
})

app.post('/message', (req, res) => {
    const { name, message } = req.body
    console.log('New message: ', name, message)    
    res.json({ message: 'Thank you for your message!' })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on PORT the url http://localhost:${PORT}`)
})

export default app;