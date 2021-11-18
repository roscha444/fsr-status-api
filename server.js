const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const color = require('colors');

//body parser
app.use(express.json());

app.use(cors());

//load config.env
dotenv.config({ path: './config/config.env' });

//load routes
const status = require('./routes/status');
const errorHandler = require('./middleware/error');

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

//mount routes
app.use('/api/v1/status', status);

app.use(errorHandler);

const PORT = process.env.PORT || 1000;

const server = app.listen(PORT, function () {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green);
});

//handle unhandeld promise rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`.red);
    server.close(() => process.exit(1));
});