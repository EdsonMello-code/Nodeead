"use strict";
const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '.env')
});
module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
        "./src/database/migrations/*.js"
    ],
    entities: [
        "./src/models/*.js"
    ],
    cli: {
        migrationsDir: "./src/database/migrations"
    }
};
