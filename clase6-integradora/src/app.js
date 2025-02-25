import express from 'express'
import { conectDB, configObject } from './config/index.js'
import { sessionsRouter } from './routes/api/sessions.router.js'

const app  = express()
const PORT = configObject.port
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use()

conectDB()

app.get('/', (req, res)=>{
    res.send('bienvenidos a la integradora')
})
app.use('/api/sessions', sessionsRouter)

app.listen(PORT, ()=>{
    console.log(`escuchando server en puerto ${PORT}`)    
})