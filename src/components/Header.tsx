import { LinksGroup } from "./LinksGroup";

export function Header(props: { data: any }) {
    return (
        <header className="flex flex-col items-center leading-12 my-2">
            <h1 className="text-[2.5rem] mx-10">
                NADSON ALEX DA SILVA
            </h1>
            <LinksGroup data={props.data} />
        </header>
    )
}