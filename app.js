const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

const PORT = 3000;
const bodyParser = require('body-parser');

// ... other app setup code ...

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    console.log(req.body);  // This will log the form data to the console
    res.redirect('/');  // Redirect the user back to the home page after submission
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
