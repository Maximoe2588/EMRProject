const express = require('express');
const cors = require('cors');
const router = ('./router');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001', 
}));

app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/api', router); // use the routes defined in your router

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


module.exports = router;
