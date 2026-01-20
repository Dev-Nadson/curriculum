import type { IInfoProps } from "../typings/types"

export function LinksGroup({ data }: { data: IInfoProps[] }) {
    return (
        <div className="flex w-screen justify-center gap-6">
            {data.map((item, index) => {
                return (
                    <a key={index} href={item.url} className={`flex text-sm items-center gap-1.5 ${item.link ? 'text-blue-600' : ''}`}>
                        <item.icon size={18} />
                        <h4 className={``}>
                            {item.text}
                        </h4>
                    </a>
                )
            })}
        </div>
    )
}

