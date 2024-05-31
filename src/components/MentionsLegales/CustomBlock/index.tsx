import Image from "next/image";
interface CustomBlock {
    title: string
    description: string
    image: string
}
export default function CustomBlock({title, description, image}: CustomBlock) {
    return (
        <div className={"flex flex-col gap-3 border-2 border-custom_yellow rounded-lg p-3 w-[20rem]"}>
            <div className={"flex items-center gap-3"}>
                <Image src={image} alt={"interrogation"}
                       width={25}
                       height={0}/>
                <p className={"font-bold"}>{title}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}