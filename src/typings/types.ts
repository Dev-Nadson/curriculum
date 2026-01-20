import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export interface IInfoProps {
    icon: LucideIcon
    text: string
    url: string
    link?: boolean
}

export interface IExperienceProps {
    children: ReactNode
    enterprise: string
    role: string
    worktype: string
    date: string
}