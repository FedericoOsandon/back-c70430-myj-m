// import express from 'express'
const express        = require('express') 
const logger         = require('morgan')
const productsRouter = require('./routes/products.router.js')
const pruebasRouter = require('./routes/pruebas.router.js')
const sessionsRouter = require('./routes/api/sessions.router.js')
const viewsRouter = require('./routes/views.router.js')
const { connectDB }  = require('./config/index.js')
const cookieParser   = require('cookie-parser')
const handlebars     = require('express-handlebars')
// importaciones de la clase
const session        = require('express-session')
const FileStore      = require('session-file-store')
const MongoStore     = require('connect-mongo')
const { initializePassport } = require('./config/passport.config.js')
const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(cookieParser('CoderPalab@S3cret@'))

// configuración del motor de plantillas
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// configurar la carpeta donde debe tomar las plantillas
app.set('views', __dirname + '/views')
// extención de las plantillas
app.set('view engine', 'hbs')

initializePassport()
app.use(passport.initialize())
connectDB()

app.use('/', viewsRouter)
app.use('/pruebas', pruebasRouter)
app.use('/api/sessions', sessionsRouter)

// app.use('/api/products', productsRouter)
// app.use('/api/carts', ()=>{})
// app.use('/api/users', ()=>{})



app.listen(8080, ()=>{
    console.log('escuchando server en el puerto 8080')
})


