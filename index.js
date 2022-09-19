const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const expSession = require('express-session');
const PORT = process.env.PORT || 3001;

require('dotenv');


// creates an instance of EXPRESS WEB SERVER
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname, 'public')))
// this is specifically HANDLEBARS SETUP 
const hbs = handlebars.create({})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Routes
app.get('/', (req, res) => {
    // res.send("Testing Route");
    console.log(req)
    res.render('landing');
});

app.get('/test', (req, res) => {
    let obj = {
        id: "10",
        username: "Phil"
    }


    res.render('test', {obj})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/', (req, res) => {
    //talk to our Database

    // filter some code

    // return (RESPONED) json data or a VIEW with context data
})

app.put()

app.delete()



// Start Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});