import express from 'express';
import bodyParser from 'body-parser';

import usersRouters from './routes/user.js';

const app = express();
const Port = 5000;

app.use(bodyParser.json());

app.use('/users', usersRouters);

app.get('/', (req, res) => {
    res.send('Hello from Homepage!');
});

app.listen(Port, () => console.log(`Listening on port: http://localhost:${Port}`));