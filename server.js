import express from "express";
import app from './src/app.js'


const json = {
    'status': 'OK'
}

app.get('/', (req, res) => {
    res.send(json);
})

app.listen(3000, () => {
    console.log('Server en estado escucha');
})