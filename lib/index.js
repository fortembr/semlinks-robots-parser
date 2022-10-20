"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robots_1 = require("./robots");
function robotsParser(returnType, filePath) {
    const robotsParser = new robots_1.RobotsParser();
    robotsParser.parseFile(returnType, filePath);
}
exports.default = robotsParser;
