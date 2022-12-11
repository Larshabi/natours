const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const TourRoutes = require('./routes/tour');
const UserRoutes = require('./routes/user');
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

app.use('/api/v1/tours', TourRoutes)
app.use('/api/v1/users', UserRoutes)



module.exports = app;