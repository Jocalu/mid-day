const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug');
const { connect } = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const restaurantRouter = require('./src/router/restaurantRouter');
const userRestaurantRouter = require('./src/router/userRestaurantRouter');
const dishRouter = require('./src/router/dishRouter');
const menuRouter = require('./src/router/menuRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/v1/midday/restaurant', restaurantRouter);
app.use('/api/v1/midday/menu', menuRouter);
app.use('/api/v1/midday/user-restaurant', userRestaurantRouter);
app.use('/api/v1/midday/dish', dishRouter);

app.listen(port, () => {
  debug(`${chalk.italic.bgBlue('Server running in')} ${chalk.yellow(`http://localhost:${port}`)}`);
  debug(`Database url: ${chalk.yellow(process.env.DDBB_URL)}`);
});
