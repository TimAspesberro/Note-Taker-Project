const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'))
});

app.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        res.json(data)
    })
});

app.post('/api/notes', (req, res) => {
    const bodyData = req.body;

    res.writeFile('Develop\db\db.json', bodyData, (err) => {
        if (err) 
        console.log(err);
        else {
        console.log('note recieved')
        }
    })
});
