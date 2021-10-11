const express = require('express');
const app = express();
const port = 3000;

const fac = n => {
    let ret = 1;
    for (let i = 1; i <= n; i++)
        ret *= i;
    return ret;
};

app.get('/factorial', (req, res) => {
    const { number } = req.query;
    res.redirect('/factorial/' + number);
});

app.get('/factorial/:number', (req, res) => {
    n = parseInt(req.params.number, 10);
    if (!isNaN(n))
        res.send(`${fac(n)}`);
    else
        res.send('Wrong Input!');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));