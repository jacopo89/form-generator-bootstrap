import moment from "moment";


export const BACKEND_FORMAT = "YYYY-MM-DD";
export const FRONTEND_DATE_FORMAT = "DD/MM/YYYY";
export const FRONTEND_DATETIME_FORMAT = "DD/MM/YYYY hh:mm";

export function normalizeDate(date:string){
    const momentDate = moment(date, BACKEND_FORMAT);
    return momentDate;
}

export function serializeDate(date:Date){
    const momentDate = moment(date);
    return momentDate.format(BACKEND_FORMAT)
}

export function getMomentDate(date:Date){
    return moment(date)
}

export function normalizeDateBootstrap(date:string){
    const momentDate = moment(date, BACKEND_FORMAT);
    return new Date(momentDate.year(), momentDate.month(),momentDate.date())
}

export function serializeDateBootstrap(date:Date){
    const momentDate = moment(date);
    return momentDate.format(BACKEND_FORMAT)
}
