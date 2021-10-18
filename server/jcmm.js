const express = require('express');
const jcmm = express();
const cors = require('cors');
const http = require('http').Server(jcmm)

jcmm.use(cors());
jcmm.use(express.json());
jcmm.use(express.urlencoded({ extended: false }));

jcmm.get('/login', (req, res) => {
            console.log('Clicked on Server');
            const value = 152;
            res.json = ({ value: value });

            jcmm.listen(3000, console.log('JCMM Running on Port 3000'))