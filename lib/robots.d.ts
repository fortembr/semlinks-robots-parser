import { ReturnType } from './options';
export declare class RobotsParser {
    private trimWhitespace;
    private isComment;
    private isBlank;
    private splitLine;
    private checkDirective;
    private parseLineIntoArray;
    parseFile(returnType: `${ReturnType}`, filePath: string): string | undefined;
}
