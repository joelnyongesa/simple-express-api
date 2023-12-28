const express = require('express');
const app = express();

// Defining our routes
app.get('/', (req, res) => {
    res.send('Hello there, this is my first Node API')
});

const port = 8000;
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
})