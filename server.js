const express = require('express');
const path = require('path');

const app = express();
// const PORT = 3001;
app.request(express.static('public'));

// get index
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../..public/index.html"));
});

// get notes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// routes - Do I need this???
// app.get('/routes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/routes.html'))
// );

// app.listen(PORT, () =>
//     console.log('Serving static asset routes at port http://localhost:${PORT}')
// );

module.exports = express;