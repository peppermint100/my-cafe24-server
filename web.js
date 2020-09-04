const express = require('express')
const app = express()
const PORT = 8001

app.use(express.static('views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/test', (req, res) =>{
    res.render('./testpage.ejs')
})

app.get('/api', (req, res) => {
    res.json({
        test: "test"
    })
})

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})