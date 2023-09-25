export interface FileToUpload {
    base64: string | ArrayBuffer | null;
    filename: string;
    title: string;
}
declare const readFileAsync: (file: File) => Promise<unknown>;
declare const readFile: (file: File) => Promise<unknown>;
declare const readFiles: (files: FileList) => Promise<unknown[]>;
export { readFile, readFiles, readFileAsync };
