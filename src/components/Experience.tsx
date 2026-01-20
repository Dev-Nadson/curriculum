import type { IExperienceProps } from "../typings/types";

export function Experience(props: IExperienceProps) {
    return (
        <div className="flex flex-col gap-0.5">
            <div className="flex justify-between mt-1">
                <div className="flex flex-col ">
                    <h1 className="font-bold leading-4">{props.enterprise}</h1>
                    <h2>{props.role}</h2>
                </div>
                <div className="flex flex-col leading-5 text-end">
                    <h2>{props.worktype}</h2>
                    <h2>{props.date}</h2>
                </div>
            </div>
            <p className="text-justify">
                {props.children}
            </p>
        </div>
    )
}