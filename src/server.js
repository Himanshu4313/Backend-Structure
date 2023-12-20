import dotenv from 'dotenv';
import connectToDB from './configs/db.connection.js';
import app from './app.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

//connect database 
// And this connectToDB function is always return a promise
connectToDB()
.then(() =>{
    app.listen(PORT,() =>{
        console.log(`Server is listen at http://localhost:${PORT}`);
    })
})
.catch(() =>{
    console.log('Database connection Failed !!!');
})



