const connectDB=require('./server/db/connect');
const express=require('express');
const app=express();
const tasks=require('./server/routes/routeTasks');
const notFound=require('./server/middleware/not-found');
require('dotenv').config();

// Middleware 
app.use(express.json());
app.use(express.static('./public'));

// Root routes
app.use('/api/v1/tasks',tasks);
app.use(notFound);

const port=process.env.PORT||3000;

const start=async () => {
    try {
        await connectDB(process.env.MONGO_URI); // ✅ Ensure MongoDB connection string is correct

        app.listen(port,() => console.log(`🚀 Server is listening on port ${port}...`));
    } catch(error) {
        console.log("❌ Error starting server:",error);
    }
};

start();
