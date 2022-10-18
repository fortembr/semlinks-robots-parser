import { RobotsParser } from './robots';

export default function robotsParser(filePath: string): void {
  const robotsParser = new RobotsParser();
  robotsParser.readFile('./src/robots-example.txt');
}

robotsParser('./src/robots-example.txt');
