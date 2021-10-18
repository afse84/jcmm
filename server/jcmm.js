const express = require('express');
const cors = require('cors');
const { appendFile } = require('fs');
const jcmm = express();

jcmm.get('/login', (req, res) => {
    console.log('Clicked on Server');
})

jcmm.listen(3000, console.log('JCMM Running on Port 3000'))