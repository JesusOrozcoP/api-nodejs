import express from 'express';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/users.js';
import swaggerDocument from '../src/swagger.json' assert {type: 'json'};

//const swaggerDocument = require('swagger.json');

//  const swaggerDocument = import('./swagger.json', {
//      assert:  {
//        type: 'json'
//      }
//    });


// Parsers
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Main APP
const app = express()

// Configiration

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))


app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});


//const app = express();
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

export default app;