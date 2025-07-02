
import express from 'express';
import handlebars from 'express-handlebars'; 

const app = express(); // export app

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('index', {layout: false})
})

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
