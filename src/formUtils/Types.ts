import { CSSProperties, SetStateAction } from 'react'

export interface Props {
    hide: () => void
}

export type Button = HTMLButtonElement & {
    style: CSSProperties
} | null

export type SetShowLoader = React.Dispatch<SetStateAction<boolean>>