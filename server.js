const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const insuredRoutes = require('./routes/insuredRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/insured', insuredRoutes);
mongoose.connect(process.env.MONGO_URI)
 
.then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.error(err));