var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const readFileAsync = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield readFile(file);
    return content;
});
const readFile = (file) => new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = evt => resolve({ filename: file.name, base64: reader.result, title: file.name });
    reader.readAsDataURL(file);
});
const readFiles = (files) => __awaiter(void 0, void 0, void 0, function* () {
    const fileListLength = files.length;
    const filesRead = [];
    for (let i = 0; i < fileListLength; i++) {
        const file = yield readFileAsync(files[i]);
        filesRead.push(file);
    }
    return filesRead;
});
export { readFile, readFiles, readFileAsync };
