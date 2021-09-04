const helmet = require('helmet');
const cors = require('cors');
const express = require('express');


const app = express();



const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server listen at port ${port}`);
})