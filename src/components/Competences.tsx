import type { ICompetencesProps } from "../typings/types";

export function Competence({ Competences }: { Competences: ICompetencesProps[] }) {
    return (
        <div>
            {Competences.map((Competence, index) => {
                return (
                    <div key={index} className="flex flex-col">
                        <p className="ml-5 max-w-160">{Competence.data}</p>
                    </div>
                )
            })}
        </div>
    )
}