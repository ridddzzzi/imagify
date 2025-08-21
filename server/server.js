import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'; 

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
await connectDB();

app.get('/', (req,res) =>
res.send("api working fine") )

app.listen(PORT, () => 
// console.log(`server running on   ${PORT}`));
console.log('server running on port ' + PORT) );


