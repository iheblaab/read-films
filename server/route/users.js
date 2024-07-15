const routeru = require('express').Router()



const { getallusers, getonesers, addusers, deleteusers,updateusers } = require('../controller/users')


routeru.get('/getall', getallusers)
routeru.get('/getone/:id', getonesers)
routeru.post('/add', addusers)
routeru.delete('/delete/:id',deleteusers)
routeru.put('/update/:id',updateusers)





module.exports = routeru;