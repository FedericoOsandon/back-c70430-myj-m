// import express from 'express'
const { Router } = require('express')
const { authentication } = require('../middlewares/auth.middleware')
const { fork } = require('node:child_process')

const router = Router()


// function operacionCompleja() {
//     let result =  0
//     for (let i = 0; i < 9e10; i++) {
//         result+=i        
//     }
//     return result
// }

// router.get('/suma', (req, res) => {
//     const resultado = operacionCompleja()
//     res.send({resultado})
// })

router.get('/suma', (req, res) => {
    const childProcess = fork('./src/routes/operacionCompleja.js')
    childProcess.send('inicar el proceso')
    childProcess.on('message', resultado => {
        res.send({resultado})
    })
})

// router.param('parametro', async(req, res, next, parametro) => {
//     // buscar en la base de datos
//     if(!parametro) console.log('no se encuentra el parametro', parametro)
//     console.log(parametro)
//     next()
// })

// router.get('/:parametro([A-Za-z%C3%B3%C3%A1]+)', (req, res) => {
//     const { parametro } = req.params
//     // validaciones regex expresiones regulares para validar
//     //zod
//     res.send({parametro})
    
// })
//sessions
// router.get('/sessions', (req, res) => {
//     if(req.session.counter){
//         req.session.counter++
//         res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
//     }else{
//         req.session.counter = 1
//         res.send('Bienvenidos')
//     }
// })
// router.get('/logout', (req, res) => {
//     req.session.destroy(error => {
//         if (error) return  res.send(error)
//         res.send('logout')
        
//     })
// })

// router.post('/login', (req, res) => {
//     const { email, password } = req.body
//     // fue a la base de datos y volvio
//     if (email !== 'f@gmail.com' || password !== '123456') {
//         return res.send('falló el login')
//     }
//     // req.sessions.user => {email, admin}
//     req.session.email = email
//     req.session.admin = false

//     res.send('login exitoso')
// })

// router.get('/current', authentication ,(req, res) => {
//     res.send('info sensible de usuarios')
// })


// /// cookies 
// router.get('/setcookies', (req,res) =>{
//     res
//         .cookie('CoderCookie', 'esta es una cookie muy poderosa') // mandando info en una instrucción para que elnavegador la setee
//         .send('cookie setear')
// })
// router.get('/setcookiessinged', (req,res) =>{
//     res
//         .cookie('CoderCookieSinged', 'esta es una cookie muy poderosa', { maxAge: '10000000', signed: true}) // mandando info en una instrucción para que elnavegador la setee
//         .send('cookie setear')
// })

// router.get('/getcookies', (req,res) =>{
//     const {cookies} = req
//     console.log(cookies)
//     res.send(cookies)
// })


// router.get('/getcookiessigned', (req,res) =>{
//     const {signedCookies} = req

//     console.log(signedCookies)
//     res.send(signedCookies)
// })

// router.get('/removecookies', (req,res) =>{
    
//     res.clearCookie('CoderCookie').send('cookie coder borrada')
// })

// export default router

module.exports = router