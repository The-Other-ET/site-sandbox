const express = require('express')
const app = express()
const port = 3000
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname))
app.set('views', __dirname)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('views/about')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
