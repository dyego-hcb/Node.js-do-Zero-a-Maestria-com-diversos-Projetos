const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: "Dyego",
        surname: "Braga",
        age: "23"
    }

    const palavra = "Teste"

    res.render('home', {user: user, palavra});
});

app.listen(3000, () =>
{
    console.log('Server is running on port 3000');
})