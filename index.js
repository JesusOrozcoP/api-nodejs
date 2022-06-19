import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

import swaggerDocument from './swagger.json' assert {type: "json"};

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req,res) => res.send('Hello world from home page!!! ... :)'));

app.use(
    '/definition',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);
app.listen(PORT,() => console.log(`Server non still running on port: http://localhost:${PORT}`));