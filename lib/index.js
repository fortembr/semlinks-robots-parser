"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robots_1 = require("./robots");
function robotsParser() {
    const robotsParser = new robots_1.RobotsParser();
    robotsParser.readFile('./src/robots-example.txt');
}
exports.default = robotsParser;
robotsParser();
