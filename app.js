const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const port = 5000


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))


// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Listen to port
app.listen(port, () => console.log(`Listening on port ${port}`))