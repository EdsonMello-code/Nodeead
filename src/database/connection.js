"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const connection = typeorm_1.createConnection().then(() => console.log('Connected with database'));
exports.default = connection;
