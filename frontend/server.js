const express = require('express');
const app = express();
app.use(express.static('./dist/frontend'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {
        root: 'dist'
    })
})

app.listen(8080)