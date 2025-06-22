// index.js
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import errorHandler from "./middleware/errorhandler.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully."))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Cheat Buster API is running!');
});

app.get('/start',(req,res)=>{
    res.send('Route Started ! ');
})

// Use our user routes for any path starting with /api
app.use('/api', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on <http://localhost>:${PORT}`);
});
