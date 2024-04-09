const connectDB=require('./db/connect')
const express=require('express');
const app=express();
const tasks=require('./routes/routeTasks')
const notFound=require('./middleware/not-found')
require('dotenv').config()
//midleware 
app.use(express.json())
app.use(express.static('./'))
app.use(express.static('./public'))

//root routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const port=process.env.PORT||3000

const start=async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()