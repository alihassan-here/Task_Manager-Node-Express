const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/db')
const taskRoute = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/errorHandler');


//MIDDLEWARES
app.use(express.static('./public'))
app.use(express.json());


//ROUTES    
app.use('/api/v1/tasks', taskRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 4000;
//if out connection with database is successful, then we want to start server.
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server is listening at ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
start();