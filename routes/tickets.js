const router = require('express').Router()
const Db = require('../db/db')

router.get('/t/ticketId',(req,res)=>{
    const ticketId = req.body.tincketId
    const ticket = Db.findById(ticketId)
    res.status(200).json(ticket)
})

router.patch('/t/ticketId',(req,res)=>{
    const ticketId = req.body.ticketId
    const ticketUpdate = Db.updateById(ticketId,req.body)
    res.status(200).json({message:"update ticket by id"},ticketUpdate)
})
router.delete('/t/ticketId',(req,res)=>{
    const ticketId = req.body.ticketId
     Db.deleteById(ticketId)
res.status(203).send()
})

router.get('/t/username',(req,res)=>{
    const username = req.body.username
    const findUsername = Db.findByUnername(username)
    res.status(200).json(findUsername)
})
router.patch('/t/username',(req,res)=>{
    const ticket = req.body.username
    Db.updateByUsername(ticket,req.body)

    res.status(200).json({message:"updated"},ticket)
})
router.delete('/t/username',(req,res)=>{
    const ticket = req.body.username
    Db.deleteByUsername(ticket)
    res.status(203).json({message:"ticket delete successfull"})
})

router.post('/sell',(req,res)=>{
    const {username,price} = req.body
    const ticket = Db.create(username,price)
    res.status(201).json({message:"Ticket created successfull",ticket})

})

router.post('/bulk',(req,res)=>{
    const {username,price,quantity} = req.body
    const tickets = Db.bulkCreate(username,price,quantity)
    res.status(201).json({message:"Bulk ticket created successfull",tickets})
})



router.get('/draw',(req,res)=>{
    const winnerCount = req.query.wc ?? 1
    const winner = Db.draw(winnerCount)
    res.status(200).json(winner) 
})

router.get('',(_req,res)=>{
    const tickets = Db.find()
    res.status(200).json(tickets)
})

module.exports = router