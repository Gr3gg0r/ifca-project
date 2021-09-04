const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const auth = require('./routes/authentication');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(express.static(__dirname + '/public/dist/spa'));

app.use('/api/auth',auth);

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server listen at port ${port}`);
})