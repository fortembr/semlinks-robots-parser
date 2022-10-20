// Custom Modules
import { ReturnType } from './options';
import { RobotsParser } from './robots';

export default function robotsParser(filePath: string): void {
  const robotsParser = new RobotsParser();
  robotsParser.readFile(filePath);
}
