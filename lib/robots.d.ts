export declare class RobotsParser {
    private trimWhitespace;
    private isComment;
    private isBlank;
    private splitLine;
    private checkDirective;
    private parseLineIntoArray;
    parseFile(filePath: string): Promise<unknown>;
    logFile(filePath: string): string;
}
