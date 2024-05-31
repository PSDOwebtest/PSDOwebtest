import Image from "next/image";
import Link from "next/link";
interface SommaireLink {
    title: string
    anchorTo: string
    image: string
}
export default function SommaireLink({title, anchorTo, image}: SommaireLink) {
    return (
        <Link href={`#${anchorTo}`} className={"flex gap-3 items-center"}>
            <Image src={image} alt={"interrogation"} width={25}
                   height={0}/>
            <p className={"underline hover:text-custom_yellow transition-colors"}>{title}</p>
        </Link>
    )
}