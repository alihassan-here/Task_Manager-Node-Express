const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');
const connectDb = require('./config/db')
require('dotenv').config();


//MIDDLEWARES
app.use(express.static('./public'))
app.use(express.json());


//ROUTES    
app.use('/api/v1/tasks', taskRoute);

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