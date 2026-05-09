interface ISeparatorProps {
    title: string
}

export function Separator({ title }: ISeparatorProps) {
    return (
        <div className="w-full">
            <h3>{title}</h3>
            <div className="rounded-full border border-stone-300"></div>
        </div>
    )
}