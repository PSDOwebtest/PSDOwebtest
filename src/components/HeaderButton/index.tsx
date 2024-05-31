import Link from "next/link";
interface Props {
    url: string
    title: string
}
export default function HeaderButton({ url, title }: Props) {
    return <li><Link href={url} className={"text-custom_yellow border border-custom_green p-0.5 rounded hover:bg-custom_yellow hover:text-custom_blue_black transition-colors"}>{title}</Link></li>
}