import {HTMLInputTypeAttribute} from "react";
import {motion} from "framer-motion";

interface Types{
    type: HTMLInputTypeAttribute,
    name: string,
    labelVal: string,
    required?: boolean,
    showed?: boolean
}
export default function CustomFormInput({type, name, labelVal, required, showed = true}: Types){
    return (
        <div className={`${showed ? 'flex' : 'hidden'} flex-col items-center gap-3`}>
            <label htmlFor={name} className={"w-72 text-center font-medium"}>{labelVal}</label>
            <motion.input whileFocus={{scale: 1.05}} transition={{duration: 0.3}} type={type} id={name} name={name} required={required} className={"text-center rounded mobile:w-[15rem] w-[30vw] py-1 p-0.5 shadow-custom_shadow"}/>
        </div>
    )
}