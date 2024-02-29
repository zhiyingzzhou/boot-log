export declare const azure = "#1475b2";
export declare const green = "#42c02e";
export interface IBootLogData {
    title: string;
    content: string;
    backgroundColor?: string;
}
declare function bootLog(data: IBootLogData): string[];
export default bootLog;
