import type { ICourseProps } from "../typings/types";

export function Course(props: ICourseProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className=" flex flex-col">
                    <h1 className="font-bold">{props.title}</h1>
                    <h2>{props.school}</h2>
                </div>
                <h2>{props.date}</h2>
            </div>
            <p>{props.children}</p>
        </div>
    )
}