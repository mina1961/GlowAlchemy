
import express from 'express';
import handlebars from 'express-handlebars'; 

const app = express(); // export app

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('./src/styles')); // serve static files from the 'styles' directory

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
