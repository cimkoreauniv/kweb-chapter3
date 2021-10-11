const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/loginpage.html`));

app.post('/login', (req, res) => {
    res.send(`Username: ${req.body.username} Password: ${req.body.password}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));