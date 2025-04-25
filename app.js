const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
const port = 3000
app.use(cors(corsOptions));
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname))
app.set('/', __dirname)
app.set('view engine', 'ejs')


// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('/testform', (req, res) => {
//     res.render('emailjs-test')
// })

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/partialstest', (req, res) => {
    res.render('partials-test')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
