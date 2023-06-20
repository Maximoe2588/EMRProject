const express = require('express');
const router = express.Router();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001', 
}));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


module.exports = router;
