import {useState} from "react";
import {motion} from "framer-motion";

interface QuestionDiv {
    question: string;
    response: string
}

export default function QuestionDiv({question, response}: QuestionDiv) {
    const [isclicked, setIsclicked] = useState(false)
    return (
        <div className={"flex flex-col gap-3 px-5 py-5"}>
            <div className={"flex justify-between cursor-pointer"} onClick={() => setIsclicked(!isclicked)}>
                <p className={"font-bold w-64 sm:w-full"}>{question}</p>
                <motion.button initial={{rotate: 0}} animate={isclicked ? {rotate: 180} : {}}
                               className={"text-custom_yellow text-xl"}>∧
                </motion.button>
            </div>
            <motion.div initial={{y: -20, opacity: 0, display: 'none'}}
                        animate={isclicked ? {y: 0, opacity: 1, display: 'block'} : {}}>
                <p className={"text-sm"}>{response}</p>
            </motion.div>
        </div>
    )
}