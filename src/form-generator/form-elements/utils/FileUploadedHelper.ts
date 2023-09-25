export interface FileToUpload{
    base64:string|ArrayBuffer|null;
    filename:string;
    title:string;
}

const readFileAsync = async (file:File) => {
    const content = await readFile(file)
    return content

}

const readFile = (file:File) => new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = evt => resolve({filename:file.name,base64:reader.result, title:file.name})
    reader.readAsDataURL(file)
})

const readFiles = async (files:FileList) => {
    const fileListLength = files.length;
    const filesRead = []
    for (let i = 0; i < fileListLength; i++) {
        const file = await readFileAsync(files[i])
        filesRead.push(file)
    }
    return filesRead;
}

export {readFile, readFiles,readFileAsync}
