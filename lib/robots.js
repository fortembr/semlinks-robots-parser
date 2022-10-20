"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotsParser = void 0;
// Node Modules
const fs_1 = require("fs");
const readline_1 = require("readline");
// Custom Modules
const options_1 = require("./options");
class RobotsParser {
    // remove whitespace before & after line to make parsing each line easier
    trimWhitespace(line) {
        return line.trim();
    }
    // flag lines with comments
    isComment(line) {
        // the # character starts a comment
        const commentCharacterFlag = '#';
        return line.substring(1) === commentCharacterFlag;
    }
    // flag blank lines
    isBlank(line) {
        const cleanLine = this.trimWhitespace(line);
        if (cleanLine === '' || cleanLine === ' ') {
            return true;
        }
        return false;
    }
    // split line by ":"
    // each directive in the robots file is separated by colon
    splitLine(line) {
        const len = line.length;
        const colonIndex = line.indexOf(':');
        return {
            directive: line.substring(0, colonIndex).toLowerCase(),
            value: line.substring(colonIndex + 1, len)
        };
    }
    // check for user-agent
    checkDirective(line, value) {
        // @ts-ignore-next-line
        return line.directive.toLowerCase().includes(value);
    }
    // parse file into array format
    parseLineIntoArray(line) {
        // trim spaces before-after line
        const trimmedLine = this.trimWhitespace(line);
        // check to see if the line is a comment
        const isComment = this.isComment(trimmedLine);
        // if the line is a comment, return line in format
        if (isComment)
            return { type: options_1.LineType.comment, content: trimmedLine };
        const isBlank = this.isBlank(trimmedLine);
        if (isBlank)
            return { type: options_1.LineType.blank, content: '' };
        // otherwise, split line and parse values
        const parsedLine = this.splitLine(trimmedLine);
        // check for user-agent and return values
        const isUserAgent = this.checkDirective(parsedLine, options_1.LineType.userAgent);
        if (isUserAgent) {
            return {
                type: options_1.LineType.userAgent,
                content: this.trimWhitespace(parsedLine.value)
            };
        }
        // check for disallow and return values
        const isDisallow = this.checkDirective(parsedLine, options_1.LineType.disallow);
        if (isDisallow)
            return { type: options_1.LineType.disallow, content: parsedLine.value };
        // check for allow and return values
        const isAllow = this.checkDirective(parsedLine, options_1.LineType.allow);
        if (isAllow)
            return { type: options_1.LineType.allow, content: parsedLine.value };
        // check for crawl-delay and return values
        const isCrawlDelay = this.checkDirective(parsedLine, options_1.LineType.crawlDelay);
        if (isCrawlDelay)
            return { type: options_1.LineType.crawlDelay, content: parsedLine.value };
        // check for sitemap and return values
        const isSitemap = this.checkDirective(parsedLine, options_1.LineType.sitemap);
        if (isSitemap) {
            return {
                type: options_1.LineType.sitemap,
                content: this.trimWhitespace(parsedLine.value.toLowerCase())
            };
        }
        return { type: options_1.LineType.other, content: parsedLine };
    }
    parseFile(returnType, filePath) {
        // create empty array for returning data
        let fileData = [];
        if (returnType === options_1.ReturnType.console) {
            const readStream = (0, fs_1.readFileSync)(filePath, 'utf8');
            // console.log('parsed file:\n', readStream);
            return readStream;
        }
        if (returnType === options_1.ReturnType.browser) {
            // create interface with the read stream
            const readline = (0, readline_1.createInterface)({
                input: (0, fs_1.createReadStream)(filePath, 'utf8'),
                crlfDelay: Infinity
            });
            // for each line being read, the line event kicks off
            readline.on('line', (line) => {
                // format each line into array
                const lineArray = this.parseLineIntoArray(line);
                // console.log('readFile, array:\n', lineArray);
                // push line into array
                fileData.push(lineArray);
                return fileData;
            });
            // when all lines are read, close the stream
            readline.on('close', () => {
                console.log('updated array data:\n', fileData);
                return fileData;
            });
        }
        return;
    }
}
exports.RobotsParser = RobotsParser;
