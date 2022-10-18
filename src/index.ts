import { RobotsParser } from './robots';

export default function robotsParser(): void {
  const robotsParser = new RobotsParser();
  robotsParser.readFile('./src/robots-example.txt');
}
robotsParser();
