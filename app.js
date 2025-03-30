const express = require('express')
const app = express()
const port = 3000
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname))
app.set('/', __dirname)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/about', (req, res) => {
    res.render('about.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
