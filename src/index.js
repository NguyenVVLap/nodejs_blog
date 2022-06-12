// import express from 'express';
// import { engine } from 'express-handlebars';

const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})