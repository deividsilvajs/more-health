import { CSSProperties, SetStateAction } from 'react'

export interface Props {
    hide: () => void
}

export type Button = HTMLButtonElement & {
    style: CSSProperties
} | null

export type SetShowLoader = React.Dispatch<SetStateAction<boolean>>

export type Navigate = (path: string) => void

export interface Account {
    name?: string
    email: string
    password: string
    weight?: string
    height?: string
}

export type FormEvent = React.FormEvent<HTMLFormElement>