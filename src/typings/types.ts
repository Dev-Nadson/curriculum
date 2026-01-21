import type { LucideIcon } from "lucide-react"
export interface IInfoProps {
    icon: LucideIcon
    text: string
    url: string
    link?: boolean
}

export interface IExperienceProps {
    description: string[]
    enterprise: string
    role: string
    worktype: string
    date: string
}

export interface ICourseProps {
    description?: String
    school: string
    date: string
    title: string
}

export interface Data {
    Nome: string
    Links: IInfoProps[]
    Sobre: string
    Experiencias: IExperienceProps[]
    CursosEFormacoes: ICourseProps[]
}