const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(
    path.join(
        __dirname, '..', '..', 'frontend'
    )
))

app.get('/', (req, res) => {
    res.sendFile(
        path.join(
            __dirname, '..', '..', 'frontend', 'main', 'index.html'
        )
    )
})

app.use('/healt', (req, res) => {
    res.sendStatus(200);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);
})
