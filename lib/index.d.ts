import { ReturnType } from './options';
export default function robotsParser(returnType: `${ReturnType}`, filePath: string): string | Promise<import("./options").Line[]> | undefined;
