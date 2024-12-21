const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')

mongoose.connect('mongodb://localhost/urlShortener' , {
    useNewUrlParser: true, useUnifiedTopology: True
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/' , (req,res) => {
    res.render('index')
})

app.post('/shortUrls', (req,res) => {
    ShortUrl.create({ full: req.body.fullUrl})
})

app.listen(process.env.PORT || 5000) 