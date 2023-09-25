import moment from "moment";
export const BACKEND_FORMAT = "YYYY-MM-DD";
export const FRONTEND_DATE_FORMAT = "DD/MM/YYYY";
export const FRONTEND_DATETIME_FORMAT = "DD/MM/YYYY hh:mm";
export function normalizeDate(date) {
    const momentDate = moment(date, BACKEND_FORMAT);
    return new Date(momentDate.year(), momentDate.month(), momentDate.date());
}
export function serializeDate(date) {
    const momentDate = moment(date);
    return momentDate.format(BACKEND_FORMAT);
}
export function getMomentDate(date) {
    return moment(date);
}
