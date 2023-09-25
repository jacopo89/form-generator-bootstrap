import {useEffect, useRef, useState} from "react";

export default function useSimulateQuery(initialValue:any,finalValue:any){
    const ref = useRef<boolean>(false)
    const [values, setValues] = useState(initialValue)

    useEffect(()=>{
        if(!ref.current) setTimeout(()=>{
            setValues(finalValue)
            ref.current = true;
        },3000)
    },[ref])


    return values
}
