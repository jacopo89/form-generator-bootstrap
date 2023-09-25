import moment from "moment";
export declare const BACKEND_FORMAT = "YYYY-MM-DD";
export declare const FRONTEND_DATE_FORMAT = "DD/MM/YYYY";
export declare const FRONTEND_DATETIME_FORMAT = "DD/MM/YYYY hh:mm";
export declare function normalizeDate(date: string): Date;
export declare function serializeDate(date: Date): string;
export declare function getMomentDate(date: Date): moment.Moment;
