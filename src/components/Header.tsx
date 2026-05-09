import { LinksGroup } from "./LinksGroup";
import { HeaderContainer } from "./ui/HeaderContainer";

export function Header(props: { data: any }) {
    return (
        <HeaderContainer>
            <h1 className="text-[2.5rem] mx-10">
                NADSON ALEX DA SILVA
            </h1>
            <h3 className="text-[1.25rem]">
                Desenvolvedor Fullstack - <span className="text-[1.1rem]">Caruaru, Pernambuco</span>
            </h3>
            <LinksGroup data={props.data} />
        </HeaderContainer>
    )
}