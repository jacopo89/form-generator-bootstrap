import {Button} from "react-bootstrap";
import React from "react";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../../utils/DropzonePreview";
import {readFile} from "../../utils/FileUploadedHelper";
import 'react-dropzone-uploader/dist/styles.css'
import {getNestedValue} from "../../utils/form-generator-utils";
import {FileElementInterface} from "../../interfaces/FileElementInterface";

export default function FileFormField(props:FileElementInterface){
    const {type,values,disable, errors, touched,setFieldValue,accessor,Header, accept,maxFileSizeMB=10} = props

    const existingFile = getNestedValue(accessor,values)
    const onDownloadFile = () => {window.open(process.env.REACT_APP_ENTRYPOINT + existingFile.url)}

    return <>
        <div>{Header}</div>
        {existingFile  && <>
            {existingFile.url && <Button onClick={onDownloadFile}>Download file</Button>}
            {!disable && <Button onClick={() => {setFieldValue(null)}}>Rimuovi file</Button>}
        </>}
        {!existingFile && !disable &&<>
            <Dropzone

                onSubmit={(successFiles) => {
                    const files = successFiles.map(file => file.file)
                }}
                onChangeStatus={(file, status, allFiles) => {
                    if(status === "error_file_size"){
                        throw new Error("File troppo grande")
                    }
                    if(status === "done"){
                        // @ts-ignore
                        readFile(file.file).then(result => setFieldValue(result))
                    }


                }}
                submitButtonDisabled={true}
                submitButtonContent={<button style={{height:"0!important",width:"0!important"}} hidden={true}/>}
                PreviewComponent={DropzonePreview}
                accept={accept}
                maxFiles={1}
                maxSizeBytes={maxFileSizeMB*1024*1024}
                inputContent="Carica file"
            />
            <p style={{fontSize:10}}>Max File Size: {maxFileSizeMB}MB</p>
        </> }
        {!existingFile && disable && <div>Nessun file caricato</div>}
    </>
}
