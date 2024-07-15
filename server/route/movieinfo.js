const router = require('express').Router()


const { getmovies, getonemovie, addmovie, deletemovie,updatemovie } = require('../controller/movieinfo')


router.get('/getall', getmovies)
router.get('/getone/:id', getonemovie)
router.post('/add', addmovie)
router.delete('/delete/:id',deletemovie)
router.put('/update/:id',updatemovie)





module.exports = router;