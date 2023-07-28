const express = require('express');
const app = express();
const path = require('path');
const AppError = require('./utils/AppError');
const NumberRouter = require("./routes/NumberRouter")

const port = 8008;

// 1) Routes
app.use('/numbers', NumberRouter); // Middleware (Parent Route)


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
  });

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})