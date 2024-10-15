const express = require('express');
const { readFile } = require("fs").promises;

const app = express();

app.get('/', async (request, response) => {

        if (err) {
            return response.status(500).send('sorry out of order');
            
        }

        response.send( await readFile('./test.html', 'utf8'));

});

app.listen(process.env.PORT || 3000, () => console.log(`app available on http://localhost:3000`));