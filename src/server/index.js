const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT);