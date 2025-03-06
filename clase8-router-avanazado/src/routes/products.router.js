// import express from 'express'
const { Router } = require('express')
const { productModel } = require('../models/products.model.js')

const router = Router()

// configación interna obj router ent. especìfica

router.get('/', async (req, res)=>{
    const products = await productModel.find()
    res.send(products)
})
router.post('/', async (req, res) => {
    const { body } = req
    const result = await productModel.create(body)
    res.send(result)
})
router.put('/', (req, res) => {
    res.send('update product')
})
router.delete('/s', (req, res) => {
    res.send('delete product')
})


// export default router

module.exports = router