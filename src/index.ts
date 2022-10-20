// Custom Modules
import { ReturnType } from './options';
import { RobotsParser } from './robots';

export default function robotsParser(returnType: `${ReturnType}`, filePath: string) {
  const robotsParser = new RobotsParser();
  return robotsParser.parseFile(returnType, filePath);
}
