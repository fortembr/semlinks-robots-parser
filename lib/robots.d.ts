import { Line } from './options';
export declare class RobotsParser {
    private trimWhitespace;
    private isComment;
    private isBlank;
    private splitLine;
    private checkDirective;
    private parseLineIntoArray;
    parseFile(filePath: string): Promise<Line[]>;
    logFile(filePath: string): string;
}
