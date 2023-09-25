import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../../utils/DropzonePreview";
import { readFile } from "../../utils/FileUploadedHelper";
import 'react-dropzone-uploader/dist/styles.css';
import { getNestedValue } from "../../utils/form-generator-utils";
export default function FileFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, accept, maxFileSizeMB = 10 } = props;
    const existingFile = getNestedValue(accessor, values);
    const onDownloadFile = () => { window.open(process.env.REACT_APP_ENTRYPOINT + existingFile.url); };
    return _jsxs(_Fragment, { children: [_jsx("div", { children: Header }, void 0), existingFile && _jsxs(_Fragment, { children: [existingFile.url && _jsx(Button, Object.assign({ onClick: onDownloadFile }, { children: "Download file" }), void 0), !disable && _jsx(Button, Object.assign({ onClick: () => { setFieldValue(null); } }, { children: "Rimuovi file" }), void 0)] }, void 0), !existingFile && !disable && _jsxs(_Fragment, { children: [_jsx(Dropzone, { onSubmit: (successFiles) => {
                            const files = successFiles.map(file => file.file);
                        }, onChangeStatus: (file, status, allFiles) => {
                            if (status === "error_file_size") {
                                throw new Error("File troppo grande");
                            }
                            if (status === "done") {
                                // @ts-ignore
                                readFile(file.file).then(result => setFieldValue(result));
                            }
                        }, submitButtonDisabled: true, submitButtonContent: _jsx("button", { style: { height: "0!important", width: "0!important" }, hidden: true }, void 0), PreviewComponent: DropzonePreview, accept: accept, maxFiles: 1, maxSizeBytes: maxFileSizeMB * 1024 * 1024, inputContent: "Carica file" }, void 0), _jsxs("p", Object.assign({ style: { fontSize: 10 } }, { children: ["Max File Size: ", maxFileSizeMB, "MB"] }), void 0)] }, void 0), !existingFile && disable && _jsx("div", { children: "Nessun file caricato" }, void 0)] }, void 0);
}
