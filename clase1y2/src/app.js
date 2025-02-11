// import express from 'express'
const express        = require('express') 
const logger         = require('morgan')
const productsRouter = require('./routes/products.router.js')
const pruebasRouter = require('./routes/pruebas.router.js')
const { connectDB }  = require('./config/index.js')
const cookieParser   = require('cookie-parser')
const session        = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(cookieParser('CoderPalab@S3cret@')) // (req, res, next)=>{}
app.use(session({
    secret: 'secretCoder',
    resave: true, // mantiene activa session
    saveUninitialized: true // guarda sessin aun con objeto vacío
}))

// app.use((req, res, next)=>{
//     console.log('datos fecha: ', Date())
//     // aquí ->
//     next()
// })

// const midd = (req, res, next)=>{
//     console.log('datos fecha: ', Date())
//     // aquí ->
//     next()
// }

// conectar conla base de datos
connectDB()

// app.get('/saludo', midd, function(peticion, respuesta) {
//     console.log('middleware')
//     respuesta.send('hola mundo')
// })

// entidades -> represantion products - carts - users - tickets - message
// crud create - read - update - delete - ABM alta baja y modifica
// http://localhost:8080 /api/products +

app.use('/pruebas', pruebasRouter)
// app.use('/api/products', productsRouter)
// app.use('/api/carts', ()=>{})
// app.use('/api/users', ()=>{})



app.listen(8080, ()=>{
    console.log('escuchando server en el puerto 8080')
})


// mongoo ? DB 
// no relacional o no SQL

// server conectar con mongo = mongoose 

// DB (atlas o local) + cod = mongoose ODM ( object document mapppin)

//collecciones <- documentos


