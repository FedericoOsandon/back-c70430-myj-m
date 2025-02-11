// import express from 'express'
const { Router } = require('express')
const { authentication } = require('../middlewares/auth.middleware')

const router = Router()

//sessions
router.get('/sessions', (req, res) => {
    if(req.session.counter){
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    }else{
        req.session.counter = 1
        res.send('Bienvenidos')
    }
})
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if (error) return  res.send(error)
        res.send('logout')
        
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    // fue a la base de datos y volvio
    if (email !== 'f@gmail.com' || password !== '123456') {
        return res.send('falló el login')
    }
    // req.sessions.user => {email, admin}
    req.session.email = email
    req.session.admin = false

    res.send('login exitoso')
})

router.get('/current', authentication ,(req, res) => {
    res.send('info sensible de usuarios')
})


/// cookies 
router.get('/setcookies', (req,res) =>{
    res
        .cookie('CoderCookie', 'esta es una cookie muy poderosa') // mandando info en una instrucción para que elnavegador la setee
        .send('cookie setear')
})
router.get('/setcookiessinged', (req,res) =>{
    res
        .cookie('CoderCookieSinged', 'esta es una cookie muy poderosa', { maxAge: '10000000', signed: true}) // mandando info en una instrucción para que elnavegador la setee
        .send('cookie setear')
})

router.get('/getcookies', (req,res) =>{
    const {cookies} = req
    console.log(cookies)
    res.send(cookies)
})


router.get('/getcookiessigned', (req,res) =>{
    const {signedCookies} = req

    console.log(signedCookies)
    res.send(signedCookies)
})

router.get('/removecookies', (req,res) =>{
    
    res.clearCookie('CoderCookie').send('cookie coder borrada')
})

// export default router

module.exports = router