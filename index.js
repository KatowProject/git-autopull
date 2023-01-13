const express = require('express');


const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log('Server started on port 3000'));