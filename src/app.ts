import express from "express";

const app= express()
app.use(express.json())


app.get('/health', (req, res) => {
      res.send('ok')
})
// todo routes



export default app